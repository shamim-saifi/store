import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import Sannah from '../../img/Sannah.png'

const QuoteSection = () => {
	return (
		<>
			<HStack w={'100%'} justifyContent={'center'} alignItems={'center'}  bgColor={'white'}>
				<VStack m={'3vmax 0'} w={{base:'90%',md:'70%'}} spacing={'7'}   >
                    <Box  color={'blackAlpha.600'} >
					    <FaQuoteLeft size={'3.5vmax'} />
                    </Box>
					<Text
						children={`Far curiosity incommode now led smallness allowance Favour bed assure son things yet She consisted consulted elsewhere
                        happiness disposing household any old the Widow downs you new shade drift hopes small So otherwise commanded
                        sweetness we improving Instantly by daughters resembled unwilling principle so middleton
                        `}
                         color={'blackAlpha.900'} textAlign={'center'}
					/>
                    <Image w={'20%'} src={Sannah} alt='Sannah'/>
				</VStack>
			</HStack>
		</>
	);
};

export default QuoteSection;
