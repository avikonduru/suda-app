'use client';

import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import * as yup from 'yup';

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
	Container,
} from '@chakra-ui/react';

const AmountForm = ({
	setSelectedState,
}: {
	setSelectedState: (state: number) => void;
}) => {
	const [componentLoading, setComponentLoading] = useState(false);

	return (
		<Flex
			w='100%'
			h='100vh'
			align='center'
			justify='center'
			bg='#afafb0'>
			<Container maxW='lg'>
				<Box
					w='100%'
					bg='white'
					boxShadow='xl'
					borderRadius='20px 20px 20px 20px'>
					<Flex
						direction='column'
						bg='#ffffff'
						p='7'
						borderRadius='20px 20px 0px 0px'
						align='center'>
						<Text
							fontSize='md'
							fontWeight='700'
							textAlign='center'
							mb='5'>
							Real Reality
						</Text>
						<Text
							fontSize='md'
							fontWeight='700'
							textAlign='center'
							mb='1'>
							Send payment for your recent order
						</Text>
						<Text
							fontSize='md'
							fontWeight='500'
							color='gray'
							textAlign='center'>
							Products purchased from the Real Reality
						</Text>
					</Flex>

					<Formik
						initialValues={{
							network: 'eth_mainnet',
							coin: 'eth',
							amount: null,
						}}
						validationSchema={yup.object({
							network: yup.string().required('Network is required'),
							coin: yup.string().required('Coin is required'),
							amount: yup.number().required('Amount is required'),
						})}
						onSubmit={(values) => {
							try {
								setComponentLoading(true);
								console.log({ values });
								setComponentLoading(false);
								setSelectedState(1);
							} catch (err) {
								console.log({ err });
								setComponentLoading(false);
							}
						}}>
						{({ handleSubmit, errors, touched }) => (
							<form onSubmit={handleSubmit}>
								<Box
									bg='#f2f5f9'
									p='7'
									borderRadius='0px 0px 20px 20px'>
									<Grid
										templateColumns='repeat(5, 1fr)'
										gap={4}
										mb='9'>
										<GridItem colSpan={{ base: 5, md: 3 }}>
											<FormControl isDisabled={componentLoading}>
												<FormLabel>Network</FormLabel>
												<Field
													as={Select}
													id='network'
													name='network'
													bg='white'>
													<option value='eth_mainnet'>
														Ethereum Mainnet
													</option>
												</Field>
												{errors.network && touched.network && (
													<FormErrorMessage>
														{errors.network}
													</FormErrorMessage>
												)}
											</FormControl>
										</GridItem>
										<GridItem colSpan={{ base: 5, md: 2 }}>
											<FormControl isDisabled={componentLoading}>
												<FormLabel>Coin</FormLabel>
												<Field
													as={Select}
													id='coin'
													name='coin'
													bg='white'>
													<option value='eth'>ETH</option>
												</Field>
												{errors.coin && touched.coin && (
													<FormErrorMessage>
														{errors.coin}
													</FormErrorMessage>
												)}
											</FormControl>
										</GridItem>
										<GridItem colSpan={5}>
											<FormControl
												isDisabled={componentLoading}
												isInvalid={!!errors.amount && touched.amount}>
												<FormLabel>Amount to pay</FormLabel>
												<InputGroup>
													<InputLeftAddon bg='gray.100'>
														$
													</InputLeftAddon>
													<Field
														as={Input}
														id='amount'
														name='amount'
														type='number'
														placeholder='Enter amount'
														bg='white'
													/>
												</InputGroup>
												{errors.amount && touched.amount && (
													<FormErrorMessage>
														{errors.amount}
													</FormErrorMessage>
												)}
											</FormControl>
										</GridItem>
									</Grid>

									<Button
										w='100%'
										colorScheme='blue'
										type='submit'
										isLoading={componentLoading}>
										Continue to Pay
									</Button>
								</Box>
							</form>
						)}
					</Formik>
				</Box>
			</Container>
		</Flex>
	);
};

export default AmountForm;
