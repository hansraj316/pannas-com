import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_mock', {
  apiVersion: '2026-02-25.clover',
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { productId, name, price, image } = body;

    if (!productId || !name || !price) {
      return NextResponse.json({ error: 'Missing required product information' }, { status: 400 });
    }

    // Determine domain for success/cancel URLs
    const origin = request.headers.get('origin') || 'http://localhost:3000';

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: name,
              images: image ? [image] : [],
            },
            unit_amount: Math.round(price * 100), // Stripe expects amounts in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/?success=true`,
      cancel_url: `${origin}/?canceled=true`,
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'GB', 'IN', 'AU'], // Allow international shipping
      },
      billing_address_collection: 'required',
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Stripe Checkout Error:', err);
    return NextResponse.json({ error: err.message }, { status: err.statusCode || 500 });
  }
}
