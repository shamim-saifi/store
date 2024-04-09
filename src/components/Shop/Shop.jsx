import React from 'react'
import { Box, HStack, Heading, Stack, Text } from '@chakra-ui/react'
import p1 from '../../img/p1.jpg'
import p2 from '../../img/p2.jpg'
import p3 from '../../img/p3.jpg'
import AllFilter from '../Filters/AllFilter'
import PhoneFilter from '../Filters/PhoneFilter/PhoneFilter'
import ProductCard from '../Products/ProductCard'
import { useSelector } from 'react-redux'


const Shop = () => {
  const { products, loading } = useSelector(
		state => state.productContainer 
	);
  return (
    <>
      <Heading children={'Products For You'} margin={'2.5vmax'} fontSize={'3vmax'} textTransform={'uppercase'} />
      <Stack maxH={'100%'} w={'100%'} direction={{ base: 'column', md: 'column',lg:'row' }}  >
        <Stack flex={{ md: '1.5', lg: '1' }} display={{ base: 'none', md: 'none',lg:'block' }} >
          <AllFilter />
        </Stack>

        <Stack w={'100%'} display={{ base: 'block', md: 'block',lg: 'none'  }}>
          <PhoneFilter />
        </Stack>
        {/* h={'100%'} flex={'4'} display={'flex'} flexWrap={'wrap'} justifyContent={'center'}  */}
        <HStack  justifyContent={'center'} alignContent={'flex-start'} flexWrap={'wrap'} w={'100%'}  >
          <>
            { products && products.length>=1?(

              products.map((item,i)=>(                
                <ProductCard key={i} noOfReview={item.totalReviewOfUsersOnProduct.length} rating={item.rating} image={item.productImages.image1.url}  name={item.name} price={item.price} prodcutId={item._id} />
              ))
            ):(
              <Text textAlign={'center'} children={'Product not found'} />
            )
            }
          </>
        </HStack>
      </Stack>

    </>
  )
}

export default Shop