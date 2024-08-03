import React from 'react';

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
} from '@chakra-ui/react';
import { FaWallet, FaQrcode } from 'react-icons/fa';
import { AiFillDollarCircle } from 'react-icons/ai';

const PageTwo = () => {
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
										Send payment for your recent order
									</Text>
									<Text
										fontSize='sm'
										fontWeight='500'
										color='gray'>
										Products purchased from the Real Reality
									</Text>
								</Box>

								<Divider my='8' />

								<Box mb='8'>
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
									<Flex
										bg='gray.100'
										p='2'
										rounded='full'>
										<Flex
											h='100%'
											align='center'>
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

										<Flex
											align='center'
											mx='4'>
											<Divider
												size='lg'
												borderColor='gray'
												orientation='vertical'
											/>
										</Flex>

										<Flex
											h='100%'
											align='center'>
											<Text
												fontSize='sm'
												fontWeight='700'
												color='gray'>
												Price updates in 48:09 min
											</Text>
										</Flex>
									</Flex>
								</Box>

								<Image
									maxW='400px'
									rounded='md'
									objectFit='cover'
									src='https://wagnnxtpbwdyqfrxiedx.supabase.co/storage/v1/object/public/public/products/5f5fe937-d2f4-48e5-a467-3e2d41e693c9/1b8c874b-f7f7-4897-bcec-7e17c4aa5ff3.jpg?t=1722534455382'
									alt='Dan Abramov'
								/>
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
						<Box
							maxW='lg'
							marginLeft='60px'>
							<Text
								fontSize='2xl'
								fontWeight='800'
								mb='5'>
								Fill in the details
							</Text>

							<Box mb='5'>
								<FormControl>
									<FormLabel>Email address</FormLabel>
									<Input type='email' />
								</FormControl>
							</Box>

							<Flex
								direction='column'
								gap='2'>
								<Text
									fontSize='sm'
									fontWeight='700'>
									Continue with your preferred payment method
								</Text>
								<Flex
									as='button'
									w='100%'
									p='4'
									rounded='md'
									border='1px solid'
									borderColor='gray.200'
									boxShadow='md'
									_hover={{ bg: '#ebedf0' }}
									_active={{
										bg: '#dddfe2',
										transform: 'scale(0.98)',
										borderColor: '#bec3c9',
									}}
									_focus={{
										boxShadow:
											'0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
									}}
									align='center'>
									<Box mr='3'>
										<FaWallet />
									</Box>

									<Text
										fontWeight='700'
										fontSize='sm'>
										Wallet
									</Text>
								</Flex>

								<Flex
									as='button'
									w='100%'
									p='4'
									color='gray'
									rounded='md'
									border='1px solid'
									borderColor='gray.200'
									boxShadow='md'
									bg='#ebedf0'
									_hover={{
										cursor: 'not-allowed',
									}}
									align='center'
									disabled={true}>
									<Box mr='3'>
										<FaQrcode />
									</Box>

									<Text
										fontWeight='700'
										fontSize='sm'>
										Scan QR Code (Coming Soon)
									</Text>
								</Flex>
							</Flex>
						</Box>
					</Flex>
				</GridItem>
			</Grid>
		</Flex>
	);
};

export default PageTwo;
