'use client';

import React from 'react';
import { jwtDecode } from 'jwt-decode';

const PaymentLinkPage = ({ params }: { params: { id: string } }) => {
	return <div>{params.id}</div>;
};

export default PaymentLinkPage;
