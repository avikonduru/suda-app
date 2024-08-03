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
} from '@chakra-ui/react';

const HomePage = () => {
	return (
		<Flex
			w='100%'
			h='100vh'
			align='center'
			justify='center'
			bg='#afafb0'>
			<Box
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

				<Box
					bg='#f2f5f9'
					p='7'
					borderRadius='0px 0px 20px 20px'>
					<Grid
						templateColumns='repeat(5, 1fr)'
						gap={4}
						mb='9'>
						<GridItem colSpan={3}>
							<FormControl>
								<FormLabel>Network</FormLabel>
								<Select bg='white'>
									<option value='option1'>Option 1</option>
								</Select>
							</FormControl>
						</GridItem>
						<GridItem colSpan={2}>
							<FormControl>
								<FormLabel>Coin</FormLabel>
								<Select bg='white'>
									<option value='option1'>Option 1</option>
								</Select>
							</FormControl>
						</GridItem>
						<GridItem colSpan={5}>
							<FormControl>
								<FormLabel>Amount to pay</FormLabel>
								<Input
									placeholder='Basic usage'
									bg='white'
								/>
							</FormControl>
						</GridItem>
					</Grid>

					<Button
						w='100%'
						colorScheme='blue'>
						Continue to Pay
					</Button>
				</Box>
			</Box>
		</Flex>
	);
};

export default HomePage;
