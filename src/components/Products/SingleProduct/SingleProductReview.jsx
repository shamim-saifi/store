import { Avatar, Box, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { LoadAllProductReviews } from '../../../Redux/Action/ProductActions';

const SingleProductReview = ({name,comment,rating,avatar}) => { 
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const { ProductReviews, loading } = useSelector( 
		state => state.productContainer
	);

 
  return (
    <>
        <VStack p={'1vmax'} w={'90%'} m={'auto'} border={'1px solid gray'} >
            <HStack justifyContent={'center'} alignItems={'center'}>               
                <Avatar name={name} src={avatar} />
                <Text textTransform={'uppercase'} children={name} />               
            </HStack>
            <StarRatings rating={rating} starRatedColor={'orange'} starEmptyColor={'whiteAlpha.300'} starDimension="30px" starSpacing="15px" />
            <Text  textTransform={'uppercase'} textAlign={'center'} children={comment} 
            />

        </VStack>
    </>
  )
}

export default SingleProductReview