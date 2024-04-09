import React from 'react'
import { Box, Button, HStack, Heading, Image, Input, Stack, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, VStack } from '@chakra-ui/react'

import OrderCard from './OrderCard'

import { FiShoppingCart } from 'react-icons/fi'
import { MdClose } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemsFromCart } from '../../Redux/Action/CartActions';
import { CreateOrder } from '../../Redux/Action/OrderActions'


const PlaceOrder = ({image,name,price,prodcutId}) => {

    const cartItemsFromLocalStorage = localStorage.getItem('cartItems');
    const orderProduct=JSON.parse(cartItemsFromLocalStorage)

    const usershippingFromLocalStorage = localStorage.getItem('shipping');
    const shippingDetails=JSON.parse(usershippingFromLocalStorage)

    // console.log(orderProduct)

    const dispatch=useDispatch()
    const navigate=useNavigate()

    let sub=0;
    orderProduct.forEach(i => {
      sub=i.price*i.quantity + sub
    });
    
    
  const removeCartHandler=async (id)=>{
    await dispatch(removeItemsFromCart(id))
     navigate('/cart')
   }

   const order={
    orderProduct,
    shippingDetails,
    itemsPrice:orderProduct.price,
    taxPrice:444,
    totalPrice:sub,
    shippingPrice:34,
   }
//    const itemsPrice=orderProduct.price
const shippingPrice=10;
const taxPrice=10;
const itemsPrice=sub;
const totalPrice=itemsPrice+shippingPrice+taxPrice;
//    console.log(`totalPrice ${totalPrice}`)

   const confirmOrderHandler=async ()=>{
    await dispatch(CreateOrder(orderProduct,shippingDetails,shippingPrice,taxPrice,itemsPrice,totalPrice))
    navigate('/profile')
   }

  return (
    <>


    <Box w={'100%'} p={{base:'2',md:'5',lg:'10'}}  > 
        <Box m={'4vmax 0'} >
            <Heading children={'Your order'} />
            <Text children={'Yor are very closer to get all the products'} />
        </Box>
        <Stack  border={'1px solid gray'} direction={{base:'column',md:'column',lg:'row'}} justifyContent={{base:'center',md:'space-evenly'}} alignItems={'center'} >
            <VStack w={{base:'100%',md:'100%',lg:'50%'}} alignItems={'center'} >       
                <TableContainer>
                    <Table size='lg' variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>Product</Th>
                                <Th isNumeric>Price</Th>
                                <Th isNumeric>Quantity</Th>
                                <Th isNumeric>Subtotal</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                              orderProduct && orderProduct.map((item,i)=>(
                                <Tr key={i}>                       
                                  <Td>
                                    <HStack>
                            	          <Button onClick={()=>removeCartHandler(item.product)} children={<MdClose  />} variant={'link'} fontSize={['lg','2xl']} color={'red'}  />					
                                        <Image w={'50px'} src={item.image} alt='p1' />
                                        <Text children={item.name} />
                                    </HStack>
                                  </Td>
                                  <Td isNumeric>{item.price}</Td>
                                  <Td isNumeric>{item.quantity}</Td>                        
                                  <Td isNumeric>{item.price*item.quantity}</Td>
                                </Tr>
                              ))
                            }
              
                        </Tbody>             
                    </Table>
                </TableContainer>
            </VStack>

            <VStack spacing={'5'} p={'6'} alignItems={'flex-start'} >
                <Heading fontSize={'2xl'} children={'Order Total'} />
                <HStack>
                    <Text children={'Subtotal'} />
                    <Text children={sub} />               
                </HStack>
                <HStack>
                    <Text children={'Total'} />
                    <Text children={sub} />               
                </HStack>
                <Link  to={'/checkout'}>				
                    {/* <Button children={<IoIosGitCompare  />} variant={'link'} fontSize={['lg','2xl']} color={'black'}  /> */}
                    <Button onClick={()=>confirmOrderHandler()}  children={'Confirm Order Now'} variant={'solid'} colorScheme={'orange'} />
		    	</Link>	
            </VStack>
            
        </Stack>
    </Box>
  

        {/* <VStack w={{base:'100%',md:'70%',lg:'30%'}} spacing={'4'}  border={'1px solid black'} rounded={'md'} p={'4'} alignItems={'flex-start'} >
            <Heading children={'Your order'} />
                <VStack spacing={'4'} w={'100%'} border={'1px solid red'} alignItems={'flex-start'} >
                        
                    <HStack border={'1px solid black'} w={'100%'} justifyContent={'space-between'}>
                        <Text children={'Product'} />
                        <Text children={'Subtotal'} />
                    </HStack>
                    <HStack border={'1px solid black'} w={'100%'} justifyContent={'space-between'}>
                        <Text children={'Callie Fabric Wingback Chair'} />
                        <Text children={'$56.00'} />
                    </HStack>
                    <HStack border={'1px solid black'} w={'100%'} justifyContent={'space-between'}>
                        <Text children={'Subtotal'} />
                        <Text children={'$1,406.00'} />
                    </HStack>
                    <HStack border={'1px solid black'} w={'100%'} justifyContent={'space-between'}>
                        <Text children={'Total'} />
                        <Text children={'$1,406.00'} />
                    </HStack>

                    <OrderCard image={p1} name={'Ex/Aff. Delilah Cocktail Chair'} price={'100.00'} /> 
                    <OrderCard image={p2} name={'Ex/Aff. Delilah Cocktail Chair'} price={'100.00'} /> 
                    <OrderCard image={p3} name={'Ex/Aff. Delilah Cocktail Chair'} price={'100.00'} /> 

                </VStack>
        </VStack> */}
    </>
  )
}

export default PlaceOrder