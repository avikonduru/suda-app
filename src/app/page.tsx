'use client';

import React, { useEffect, useState } from 'react';
import { Formik, Field } from 'formik';
import * as yup from 'yup';

// components
import AmountForm from './components/AmountForm';
import Loading from './components/Loading';

// chakra
import {
	Flex,
	Box,
	Text,
	Grid,
	GridItem,
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Select,
	Input,
	Button,
	Image,
	InputGroup,
	InputLeftAddon,
} from '@chakra-ui/react';

const HomePage = () => {
	const [isClient, setIsClient] = useState(false);

	const [isTransitionLoading, setIsTransitionLoading] =
		useState(false);
	const [selectedState, setSelectedState] = useState(0);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) return null;

	return <AmountForm setSelectedState={setSelectedState} />;
};

export default HomePage;
