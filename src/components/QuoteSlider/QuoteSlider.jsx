import React from 'react'
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaQuoteLeft } from 'react-icons/fa';
import { Avatar, Box, Text, VStack } from '@chakra-ui/react';
import human1 from '../../img/Human-1.jpg';
import human2 from '../../img/Human-2.jpg';
import human3 from '../../img/Human-3.jpg';


const QuoteSlider = () => {
    const HomeSliderCardData=[
		{
			image:human1,
			name:'human1',			
			description:'The Best Choise for Your Convenience The Best Choise for Your The Best Choise for Your Convenience The Best Choise for YourThe Best Choise for Your Convenience The Best Choise for YourThe Best Choise for Your Convenience The Best Choise for Your Convenience The Best Choise for Your Convenience'
		},
		{
            image:human2,
			name:'human2',			
            description:'The Best Choise for Your Convenience The Best Choise for Your The Best Choise for Your Convenience The Best Choise for YourThe Best Choise for Your Convenience The Best Choise for YourThe Best Choise for Your Convenience The Best Choise for Your Convenience The Best Choise for Your Convenience'
		},
        {
            image:human3,
			name:'human3',			
            description:'The Best Choise for Your Convenience The Best Choise for Your The Best Choise for Your Convenience The Best Choise for YourThe Best Choise for Your Convenience The Best Choise for YourThe Best Choise for Your Convenience The Best Choise for Your Convenience The Best Choise for Your Convenience'
		},
	]
  return (
    <Box w={'100%'}  bgColor={'white'} color={'black'} >
    <Carousel  interval={2000}>
        {
            HomeSliderCardData.map((item)=>(
                <Carousel.Item color={'black'}>
                    <VStack  p={'2'} spacing={'4'} margin={'auto'} alignItems={'center'} justifyContent={'center'} fontFamily={'Kanit, sans-serif'} w={'70%'}  >
                        <Box  color={'#bfa888'} >
					        <FaQuoteLeft size={'3.5vmax'} />
                        </Box>
                        <Text  fontSize={'1vmax'} textAlign={'center'} children={item.description} />
                        <Avatar size='2xl' name={item.name} src={item.image} />
                        <Text  fontSize={'1vmax'} textAlign={'center'} children={item.name} />
                     
                    </VStack>
                </Carousel.Item>	
            ))
        }			
    </Carousel>
</Box>
  )
}

export default QuoteSlider