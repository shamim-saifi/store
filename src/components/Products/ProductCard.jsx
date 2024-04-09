import { Box, Button, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import './ProductCard.css'
import { useDispatch, useSelector } from 'react-redux'  
import { useNavigate } from 'react-router-dom'
import { GetSignleProductsDetails } from '../../Redux/Action/ProductActions'
import { addItemsToCart } from '../../Redux/Action/CartActions'



const ProductCard = ({noOfReview,rating,image,name,price,prodcutId}) => { 

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const qty=1;

    const { SignleProduct,ProductReviews, loading } = useSelector(
		state => state.productContainer
	);

    const addToCartHandler=async (id,quantity)=>{
        await dispatch(addItemsToCart(id,quantity)) 
        // navigate('/cart') 
     }

    const ShowSingleProductDetails=async (prodcutId)=>{
       await dispatch(GetSignleProductsDetails(prodcutId)) 
       navigate('/single/product/Details') 
    } 
  return (
    <>
        <VStack id='CardContainer' borderRadius={'lg'}  alignItems={'center'} border={'1px solid black'} w={{base:'350px',md:'300px',lg:'250px'}} m={{ base: '1px', md: '10px 5px' }} >
            <Box w={'100%'} onClick={()=>ShowSingleProductDetails(prodcutId)} cursor={'pointer'} >
                <Box  className='container'  borderRadius={'lg'} >
                    <Image boxSize={'100%'}  src={image} alt='ProductCard' aspectRatio={'3/3'}/>
                </Box>
                <Heading m={'0 5px'}  w={'90%'} textOverflow={'ellipsis'} overflow={'hidden'} whiteSpace={'nowrap'} fontWeight={'500'} fontSize={['xl']} color={'blackAlpha.800'}  children={`${name}`} />
                <HStack m={'0 5px'}  w={'100%'}  alignItems={'center'} >
                    <Text textDecorationLine={'line-through'} color={'blackAlpha.800'} children={`$${price}`} />
                    <Text textDecorationLine={'underline'}  color={'#bfa888'} children={`$${price}`} />
                </HStack>
                <HStack m={'0 5px'}  alignItems={'center'} justifyContent={'space-between'}> 
                    <Text fontSize={'xl'} children={`${rating}★`}   />
                    <Text   color={'#bfa888'} children={`${noOfReview} Reviews`}  /> 
                     {/* <Button rounded={'lg'} fontSize={'xl'} variant={'solid'} colorScheme={'whatsapp'} children={`${rating} ★`} />  */}
                    {/* <Text fontSize={'md'} children={`${'90808'} Reviews`} /> */}
                </HStack>
            </Box>
            {/* <HStack w={'100%'}  border={'1px solid red'} justifyContent={'space-between'} > 
                <Button onClick={()=>addToCartHandler(SignleProduct._id,qty)}  variant={'solid'} colorScheme={'whatsapp'} children={'Add To Cart'} />
                <Button variant={'solid'} colorScheme={'whatsapp'} children={'Buy Now'} />
            </HStack> */}
        </VStack>
    </>
  )
}

export default ProductCard