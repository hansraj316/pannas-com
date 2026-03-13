import { NextResponse } from 'next/server';

// Mock ASIN mapping for demonstration purposes
const ASIN_MAP: Record<string, string> = {
  'meeta-pan': 'B08X6D1S3K',
  'sada-pan': 'B09Y2L9K6W',
  'kolkata-meeta': 'B07V2G9Z5P',
  'banaras-meeta': 'B0BKZ9C8H4',
  'daisy-mehta': 'B0CK9V2L1J',
};

// In production, this would use amazon-paapi5 to fetch real-time ASIN links.
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { productId, name } = body;

    if (!productId || !name) {
      return NextResponse.json({ error: 'Product ID and name are required' }, { status: 400 });
    }

    const affiliateTag = process.env.AMAZON_AFFILIATE_TAG || 'pannascom-20';
    
    // Simulate lookup time
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // Check if we have an ASIN for this product
    const asin = ASIN_MAP[productId];
    
    let amazonUrl;
    if (asin) {
      // Direct link to the product on Amazon
      amazonUrl = `https://www.amazon.com/dp/${asin}?tag=${affiliateTag}`;
    } else {
      // Fallback search link
      amazonUrl = `https://www.amazon.com/s?k=${encodeURIComponent(name + ' pan')}&tag=${affiliateTag}`;
    }

    return NextResponse.json({ 
      amazonUrl,
      success: true,
      message: asin ? 'Direct Amazon link found' : 'Fallback search link generated'
    });
  } catch (err: any) {
    console.error('Amazon API Error:', err);
    return NextResponse.json({ error: 'Failed to process Amazon link' }, { status: 500 });
  }
}
