import { NextResponse, NextRequest } from 'next/server';
const sign = require('jwt-encode');

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { price, orderId } = body;

		if (!price) {
			return NextResponse.json(
				{ error: 'Price is required' },
				{ status: 400 }
			);
		}

		const data = {
			price: price,
			orderId: orderId ? orderId : '',
		};
		const jwt = sign(data, process.env.JWT_SECRET);

		return NextResponse.json({ jwt: jwt }, { status: 200 });
	} catch (err) {
		return NextResponse.json({ error: err }, { status: 500 });
	}
}
