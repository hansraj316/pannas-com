import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { productId, name } = body;

    if (!productId || !name) {
      return NextResponse.json({ error: 'Product ID and name are required' }, { status: 400 });
    }

    // Simulate lookup time
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // Generate a DoorDash search URL as a fallback
    const searchUrl = `https://www.doordash.com/search/store/${encodeURIComponent(name + ' pan')}`;

    return NextResponse.json({ 
      doordashUrl: searchUrl,
      success: true,
      message: 'Successfully generated DoorDash redirect link'
    });
  } catch (err: any) {
    console.error('DoorDash API Error:', err);
    return NextResponse.json({ error: 'Failed to process DoorDash link' }, { status: 500 });
  }
}
