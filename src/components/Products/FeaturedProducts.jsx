import { Box, HStack, Heading } from '@chakra-ui/react'
import React from 'react'
import ProductCard from './ProductCard'

import { useSelector } from 'react-redux'

const FeaturedProducts = () => { 
  const { products,SignleProduct,ProductReviews } = useSelector(
		state => state.productContainer
	);
  const proCount=5;
  return (
    <Box w={'100%'} bgColor={'white'}> 

    <Box m={'3vmax 0'} w={'100%'} bgColor={'white'}  > 
        <Heading fontSize={'3vmax'} fontWeight={'500'} m={'3vmax 0'}  color={'blackAlpha.800'} textAlign={'center'} children={'Featured Products'} />
        <HStack w={'90%'} margin={'auto'} spacing={'10'} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'} >
            {/* <ProductCard image={p1} name={'Ex/Aff. Delilah Cocktail Chair'} price={'100.00'} /> */}

          <>
            {
             products && products.map((item,i)=>(                
                <ProductCard  noOfReview={item.totalReviewOfUsersOnProduct.length} rating={item.rating} image={item.productImages.image1.url}  name={item.name} price={item.price} prodcutId={item._id} />
              ))
            }
          </>
       
        </HStack>
    </Box>
  </Box>
  )
}

export default FeaturedProducts