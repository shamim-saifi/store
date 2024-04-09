import React from 'react'
import { Box, Button, HStack, Heading, Image, Input, Select, Stack, Text, VStack } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const OrderCard = ({image,name,price,prodcutId}) => {

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const ShowSingleProductDetails=async (prodcutId)=>{
        // await dispatch(GetSignleProductsDetails(prodcutId))
        navigate('/single/product/Details') 
     } 
 
  return (
    <>
        <VStack  borderRadius={'lg'} spacing={'2'} alignItems={'flex-start'} border={'1px solid red'} w={{base:'350px',md:'300px',lg:'250px'}}  >
            <Box onClick={()=>ShowSingleProductDetails(prodcutId)} cursor={'pointer'}>
                <Box w={'100%'} className='container' border={'1px solid blue'} borderRadius={'lg'} >
                    <Image boxSize={'100%'} src={image} alt='ProductCard' aspectRatio={'3/3'}/>
                </Box>
                <Heading fontWeight={'500'} fontSize={['lg']} color={'blackAlpha.800'} border={'1px solid blue'}  children={`${name}`} />
                <HStack w={'100%'}  >
                    <Text textDecorationLine={'line-through'} color={'blackAlpha.800'} children={`$${price}`} />
                    <Text textDecorationLine={'underline'}  color={'#bfa888'} children={`$${price}`} />
                </HStack>
            </Box>
       
            <HStack w={'100%'}  alignItems={'center'} justifyContent={'flex-start'}> 
                <Button rounded={'20px'} fontSize={'1.5vmax'} variant={'solid'} colorScheme={'whatsapp'} children={'4.2'} />
                <Text   color={'#bfa888'} children={`423434`} />
            </HStack>
        </VStack>
    </>
  )
}

export default OrderCard