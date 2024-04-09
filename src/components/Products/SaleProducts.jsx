import { Box, HStack, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import p1 from '../../img/p1.jpg'
import p2 from '../../img/p2.jpg'
import p3 from '../../img/p3.jpg'
import p4 from '../../img/p4.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { LoadAllProducts } from '../../Redux/Action/ProductActions'

const SaleProducts = () => {

  const { products,SignleProduct,ProductReviews } = useSelector(
		state => state.productContainer
	);
// console.log(products)
  // const dispatch=useDispatch()

 
  return ( 
  <>
  <Box  w={'100%'} bgColor={'white'}>

    <Box m={'3vmax 0'} w={'100%'} bgColor={'white'}  > 
        <Heading fontSize={'3vmax'} fontWeight={'500'} m={'3vmax 0'}  color={'blackAlpha.800'} textAlign={'center'} children={'Sale Products'} />
        <HStack w={'90%'} margin={'auto'} spacing={'10'} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'} >
          <>
            {
             products && products.map((item)=>(                
                <ProductCard noOfReview={item.totalReviewOfUsersOnProduct.length} rating={item.rating} image={item.productImages.image1.url}  name={item.name} price={item.price} prodcutId={item._id} />
              ))
            }
          </>
            
            {/* <ProductCard image={p2} name={'Ex/Aff. Delilah Cocktail Chair'} price={'100.00'} /> */}
       
        </HStack>
    </Box>
  </Box>
  </>
  )
}

export default SaleProducts