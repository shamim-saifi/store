import { Box, Button, HStack, Heading, Image, Input, Stack, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { MdClose } from "react-icons/md";
import p1 from '../../img/p1.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemsFromCart } from '../../Redux/Action/CartActions';

const Cart = () => {
  // const { cartItems} = useSelector(
	// 	state => state.cartContainer
	// );
  
  
  const cartItemsFromLocalStorage = localStorage.getItem('cartItems'); 
  const usercartItems=JSON.parse(cartItemsFromLocalStorage)

  // const [usercartItems,setusercartItems]=useState()
  const dispatch=useDispatch()
  const navigate=useNavigate()

  let sub=0;
  usercartItems && usercartItems.forEach(i => {
    sub=i.price*i.quantity + sub
  });

  const removeCartHandler=async (id)=>{
   await dispatch(removeItemsFromCart(id))
    navigate('/cart')
  
  }

  

  return (
    
 <Box  border={'1px solid black'}  p={{base:'2',md:'5',lg:'10'}} >  
    <Box m={'4vmax 0'} >
        <Heading children={'Cart'} />
        <Text children={'Debating me breeding be  answered.'} />
    </Box>
    {
      usercartItems && usercartItems.length>=1?(
        // <Stack border={'1px solid blue'} direction={{base:'column',md:'column',lg:'row'}} justifyContent={{base:'center',md:'space-evenly'}} alignItems={'center'} >
        // </Stack>
        <>
          <Box  >        
            <TableContainer  >
                <Table size='lg' variant='simple'>
                  <Thead>
                    <Tr>
                      <Th></Th>
                      <Th>Product</Th>
                      <Th>Status</Th>
                      <Th>Name</Th>
                      <Th >Price</Th>
                      <Th >Quantity</Th>
                      <Th >Subtotal</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                  {
                    usercartItems && usercartItems.map((item)=>(
                      <Tr>
                        <Td >
                	          <Button onClick={()=>removeCartHandler(item.product)} children={<MdClose  />} variant={'link'} fontSize={['lg','2xl']} color={'red'}  />					
                        </Td>
                        
                        <Td>
                          <HStack>
                	          {/* <Button onClick={()=>removeCartHandler(item.product)} children={<MdClose  />} variant={'link'} fontSize={['lg','2xl']} color={'red'}  />					 */}
                              <Image w={'50px'} src={item.image} alt='p1' />
                              {/* <Text children={item.name} /> */}
                          </HStack>
                        </Td>
                        <Td >
                          {
                            item.stock>=1?(
                              <Text children={'Available'} />
                            ):(
                              <Text children={'Out of Stock'} />
                            )
                          }
                        </Td>
                        <Td >{item.name}</Td>
                        <Td >{item.price}</Td>
                        <Td >{item.quantity}</Td>                        
                        <Td >{item.price*item.quantity}</Td>
                      </Tr>
                    ))
                  }
              
                  </Tbody>
               
                </Table>
            </TableContainer>
          </Box>
        

           <VStack spacing={'5'} p={'6'} alignItems={'flex-start'} >
            <Heading fontSize={'2xl'} children={'Cart Totals'} />
            <HStack>
                <Text children={'Subtotal'} />
                <Text children={`Rs - ${sub}`} />               
            </HStack>
            <HStack>
                <Text children={'Total'} />
                <Text children={`Rs - ${sub}`} />               
            </HStack>
            <Link  to={'/checkout'}>				
                <Button  children={'Process To Checkout'} variant={'solid'} colorScheme={'orange'} />
			      </Link>	
          </VStack> 
        </>
        
      ):(
        <Text textAlign={'center'} children={' products are not in Cart'} />
      )
    }
 </Box>
  )
}

export default Cart