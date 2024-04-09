import React from 'react';
import PromoCard from './PromoCard';
import { Box, HStack, Stack } from '@chakra-ui/react';
import promo1 from '../../img/Promo-1.jpg'
import promo2 from '../../img/Promo-2.jpg'
import promo3 from '../../img/Promo-3.jpg'
 

const PromoSection = () => {
	return (
		<>
			<Box w={'100%'}  bgColor={'white'}> 
				<Stack  w={'100%'} direction={{base:'column',md:'row'}} alignItems={{base:'center',md:'center'}} justifyContent={{base:'center',md:'center'}} >
					{/* <HStack w={'50%'} justifyContent={'center'} >
					</HStack> */}
						<PromoCard size={{base:'90%',md:'25%'}} image={promo1} heading={'Modern Armchairs For Dinning Room'} description={'He share of first to worse. Weddings and any opinions suitable smallest nay'} />
						<PromoCard size={{base:'90%',md:'25%'}} image={promo2} heading={'Minimal Style For Bedroom'} description={'Lorem Ipsum is simply dumy text of the printing typesetting industry lorem ipsum.'} />
					<PromoCard size={{base:'90%',md:'50%'}}image={promo3} heading={'Up To 50% Off On Kitchen Armchairs'} description={'He share of first to worse. Weddings and any opinions suitable smallest nay'} />
					
				</Stack>
			</Box>
		</>
	);
};

export default PromoSection;
