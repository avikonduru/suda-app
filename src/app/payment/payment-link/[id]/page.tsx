'use client';

import React from 'react';
import { useRouter } from 'next/router';

const PaymentLinkPage = ({ params }: { params: { id: string } }) => {
	return <div>{params.id}</div>;
};

export default PaymentLinkPage;
