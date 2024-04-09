import { Box, Button, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import './PromoCard.css'
import { Link, useNavigate } from 'react-router-dom';


const PromoCard = ({image,heading,description,size}) => {
  const navigate=useNavigate()

  return (
    <Box _hover={{cursor:'pointer'}} onClick={(()=>navigate('/shop'))} m={{base:'0',md:'2'}} fontFamily={'Kanit, sans-serif'}  w={size} h={'600px'} bgColor={'white'} pos={'relative'} >
        <Box className='PromoCardImgBox'  w={'100%'} h={'100%'} overflow={'hidden'}  >
          <Image  w={'100%'} h={'100%'}  src={image} alt='promo1' />
          {/* <Box  >
            <Button children={'Show More'} variant={'solid'} colorScheme={'whatsapp'}  />
          </Box> */}
        </Box>
        <VStack w={'100%'}  p={'8'} spacing={'6'} justifyContent={'center'} pos={'absolute'} top={'0'} left={'0'} >
          <Heading fontWeight={'400'} textAlign={'center'} color={'blackAlpha.900'} children={heading} />
          <Text fontWeight={'300'} textAlign={'center'} color={'blackAlpha.700'} children={description} />
        </VStack>
      </Box>
  )
}

export default PromoCard