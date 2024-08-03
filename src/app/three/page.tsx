'use client';

import React, { useState } from 'react';

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
	Container,
	Divider,
	Image,
	Link,
	Icon,
	Spacer,
	Card,
	CardBody,
} from '@chakra-ui/react';
import { FaWallet, FaQrcode, FaCheckCircle } from 'react-icons/fa';
import { AiFillDollarCircle } from 'react-icons/ai';
import { ArrowBackIcon } from '@chakra-ui/icons';

const PrePayment = () => {
	return (
		<Box
			maxW='lg'
			marginLeft='60px'>
			<Button
				leftIcon={<ArrowBackIcon />}
				size='sm'
				variant='link'>
				Back
			</Button>
			<Text
				fontSize='2xl'
				fontWeight='800'
				mb='5'>
				Pay with
			</Text>

			<Card>
				<CardBody>
					<Flex
						direction='column'
						gap='6'>
						<Flex align='center'>
							<Box mr='3'>
								<FaWallet />
							</Box>

							<Text
								fontWeight='700'
								fontSize='sm'>
								Wallet
							</Text>
						</Flex>

						<Grid
							templateColumns='repeat(7, 1fr)'
							gap={6}>
							<GridItem colSpan={5}>
								<Text>Network</Text>
								<Card>
									<CardBody>
										<Flex align='center'>
											<Image
												boxSize='20px'
												objectFit='cover'
												src='https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/ZJZZK5B2ZNF25LYQHMUTBTOMLU.png'
												alt='token logo'
												mr='2'
											/>
											<Text
												fontSize='md'
												fontWeight='700'
												color='gray'>
												Ethereum Mainnet
											</Text>
										</Flex>
									</CardBody>
								</Card>
							</GridItem>
							<GridItem colSpan={2}>
								<Text>Coin</Text>
								<Card>
									<CardBody>
										<Flex align='center'>
											<Image
												boxSize='20px'
												objectFit='cover'
												src='https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/ZJZZK5B2ZNF25LYQHMUTBTOMLU.png'
												alt='token logo'
												mr='2'
											/>
											<Text
												fontSize='md'
												fontWeight='700'
												color='gray'>
												ETH
											</Text>
										</Flex>
									</CardBody>
								</Card>
							</GridItem>
						</Grid>

						<Button>Connect Wallet to Pay</Button>
					</Flex>
				</CardBody>
			</Card>
		</Box>
	);
};

const PostPayment = () => {
	return (
		<Box
			maxW='lg'
			marginLeft='60px'>
			<Card>
				<CardBody>
					<Flex
						direction='column'
						gap='6'>
						<Flex direction='column'>
							<FaCheckCircle />
							<Text
								fontWeight='700'
								fontSize='sm'>
								Payment was Successful
							</Text>

							<Text
								fontWeight='700'
								fontSize='sm'>
								Thanks for your order! You will have a tracking number
								shortly via email.
							</Text>
							<Flex>
								<Flex
									align='center'
									bg='gray.100'
									p='10px 20px'
									rounded='full'>
									<Image
										boxSize='20px'
										objectFit='cover'
										src='https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/ZJZZK5B2ZNF25LYQHMUTBTOMLU.png'
										alt='token logo'
										mr='2'
									/>
									<Text
										fontSize='md'
										fontWeight='700'
										color='gray'>
										0.2131231 ETH
									</Text>
								</Flex>
							</Flex>
						</Flex>

						<Divider />

						<Flex
							direction='column'
							gap='3'>
							<Flex>
								<Text>Network</Text>
								<Spacer />
								<Text>Ethereum Mainnet</Text>
							</Flex>

							<Flex>
								<Text>From</Text>
								<Spacer />
								<Text>0x023.3123</Text>
							</Flex>

							<Flex>
								<Text>To</Text>
								<Spacer />
								<Text>0x023.3123</Text>
							</Flex>

							<Flex>
								<Text>Transaction Hash</Text>
								<Spacer />
								<Link>0x023.3123</Link>
							</Flex>

							<Divider />

							<Flex gap='4'>
								<Button w='100%'>View Transaction</Button>
								<Button w='100%'>Download Receipt</Button>
							</Flex>
						</Flex>
					</Flex>
				</CardBody>
			</Card>
		</Box>
	);
};

const PageThree = () => {
	const [paymentSuccess, setPaymentSuccess] = useState(false);

	return (
		<Flex
			w='100%'
			h='100vh'>
			<Grid
				templateColumns='repeat(2, 1fr)'
				w='100%'>
				<GridItem
					colSpan={1}
					bg='#fafbfc'>
					<Flex
						direction='column'
						justify='space-between'
						h='100%'>
						<Flex
							direction='column'
							align='end'
							mt='60px'>
							<Box
								maxW='lg'
								marginRight='60px'>
								<Text
									fontSize='xl'
									fontWeight='700'
									mb='5'>
									Real Reality
								</Text>
								<Box>
									<Text
										fontSize='md'
										fontWeight='700'
										mb='1'>
										Total Payable Amount
									</Text>
									<Flex
										direction='column'
										gap='2'>
										<Flex align='center'>
											<Box mr='2'>
												<AiFillDollarCircle size='30px' />
											</Box>
											<Text
												fontSize='3xl'
												fontWeight='800'>
												123.45
											</Text>
										</Flex>

										<Flex align='center'>
											<Image
												boxSize='20px'
												objectFit='cover'
												src='https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/ZJZZK5B2ZNF25LYQHMUTBTOMLU.png'
												alt='token logo'
												mr='2'
											/>
											<Text
												fontSize='md'
												fontWeight='700'
												color='gray'>
												1.0 ETH
											</Text>
										</Flex>
									</Flex>
								</Box>

								<Divider my='8' />

								<Grid>
									<Grid
										templateColumns='repeat(5, 1fr)'
										gap={6}>
										<GridItem colSpan={1}>
											<Image
												// maxW='400px'
												rounded='md'
												objectFit='cover'
												src='https://wagnnxtpbwdyqfrxiedx.supabase.co/storage/v1/object/public/public/products/5f5fe937-d2f4-48e5-a467-3e2d41e693c9/1b8c874b-f7f7-4897-bcec-7e17c4aa5ff3.jpg?t=1722534455382'
												alt='Dan Abramov'
											/>
										</GridItem>
										<GridItem colSpan={4}>
											<Flex
												direction='column'
												gap='6'>
												<Box>
													<Flex>
														<Text>
															Send payment for your recent order
														</Text>
														<Spacer />
														<Text>0.0001 ETH</Text>
													</Flex>
													<Text>
														Products purchased from the Real Reality
													</Text>
												</Box>

												<Divider />

												<Box>
													<Flex>
														<Text>Subtotal</Text>
														<Spacer />
														<Text>0.0001 ETH</Text>
													</Flex>

													<Flex>
														<Text>Payment Processing Fee</Text>
														<Spacer />
														<Text>0.0001 ETH</Text>
													</Flex>
												</Box>

												<Divider />

												<Flex>
													<Text>Amount Due</Text>
													<Spacer />
													<Text>0.0001 ETH</Text>
												</Flex>
											</Flex>
										</GridItem>
									</Grid>
								</Grid>
							</Box>
						</Flex>
						<Flex
							gap='5'
							// align='center'
							justify='center'
							mb='40px'>
							<Text
								fontSize='sm'
								fontWeight='500'
								color='gray'>
								Powered by <b>Suda</b>
							</Text>

							<Flex>
								<Divider
									size='lg'
									borderColor='gray'
									orientation='vertical'
								/>
							</Flex>

							<Flex gap='3'>
								<Link
									fontSize='sm'
									fontWeight='500'
									color='gray'>
									Privacy
								</Link>
								<Link
									fontSize='sm'
									fontWeight='500'
									color='gray'>
									Terms
								</Link>
							</Flex>
						</Flex>
					</Flex>
				</GridItem>
				<GridItem
					colSpan={1}
					bg='#ffffff'>
					<Flex
						direction='column'
						h='100%'
						mt='60px'>
						<PostPayment />
					</Flex>
				</GridItem>
			</Grid>
		</Flex>
	);
};

export default PageThree;
