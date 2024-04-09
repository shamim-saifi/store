import { Box, Button, HStack, Heading, Image, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { MdClose } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeItemsFromWishlist } from '../../Redux/Action/wishlistActions';


const Wishlist = () => {
  const wishlistItemsFromLocalStorage = localStorage.getItem('wishlistItems');
  const userwishlistItems=JSON.parse(wishlistItemsFromLocalStorage)

  const dispatch=useDispatch()
  const navigate=useNavigate()

  const removeWishlistHandler=async (id)=>{
    await dispatch(removeItemsFromWishlist(id))
     navigate('/wishlist')
   
   }

  return (
    <>
   

        <Box  border={'1px solid black'}  p={{base:'2',md:'5',lg:'10'}}  >
            <Box m={'4vmax 0'} >
                <Heading children={'Wishlist'} />
                <Text children={'Debating me breeding be answered.'} />
            </Box>
          {
            userwishlistItems && userwishlistItems.length>=1?(

            <Box>
              <TableContainer>
                <Table size='lg' variant='simple'>
                  <Thead>
                    <Tr>
                      <Th></Th>
                      <Th>Product</Th>
                      <Th>Name</Th>
                      <Th >	Stock Status</Th>
                      <Th isNumeric>Price</Th>
                      <Th isNumeric>Subtotal</Th>
                      <Th isNumeric>Quantity</Th> 
                      <Th ></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {
                      userwishlistItems && userwishlistItems.map((item)=>(
                        <Tr>
                          <Td isNumeric>
                	            <Button onClick={()=>removeWishlistHandler(item.product)}  children={<MdClose  />} variant={'link'} fontSize={['lg','2xl']} color={'red'}  />					
                          </Td>
                          <Td>
                            <HStack>
                                <Image w={'50px'} src={item.image} alt='p1' />
                            </HStack>
                          </Td>
                          <Td>
                            <Text children={item.name} />
                          </Td>
                          <Td >In Stock</Td>
                          <Td isNumeric>{item.price}</Td>
                          <Td isNumeric>{item.price*item.quantity}</Td>
                          <Td isNumeric>{item.quantity}</Td>
                          <Td >
                            {/* <Button  children={'Add To Cart'} variant={'solid'} colorScheme={'orange'} /> */}
                          </Td>                      
                        </Tr>
                      ))
                    }
                    
              
                  </Tbody>
               
                </Table>
              </TableContainer>
            </Box>
            ):(
              
              <Text textAlign={'center'} children={' products are not in Wishlist'} />
            )
          }


        </Box>
     
    </>
  )
}

export default Wishlist