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
	Image,
	InputGroup,
	InputLeftAddon,
	Container,
	Spinner,
} from '@chakra-ui/react';

const Loading = () => {
	return (
		<Flex
			w='100%'
			h='100vh'
			align='center'
			justify='center'
			bg='#afafb0'>
			<Spinner />
		</Flex>
	);
};

export default Loading;
