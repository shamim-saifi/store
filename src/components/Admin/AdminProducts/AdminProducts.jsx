import React from 'react'
import {
    Box, Button, Grid, HStack, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure
  } from '@chakra-ui/react'
import ProductModel from './ProductModel'
import { RiDeleteBin7Fill } from 'react-icons/ri' 
import SideBar from '../SideBar/SideBar'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AdminDeleteProduct, GetSignleProductsDetails, LoadAllProducts } from '../../../Redux/Action/ProductActions' 


const AdminProducts = () => { 
    const { products, loading } = useSelector(
      state => state.productContainer
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deleteHandler =async (id) => {
     await dispatch(AdminDeleteProduct(id))
      dispatch(LoadAllProducts())
    }

   
    const ShowSingleProductDetails=async (prodcutId)=>{
      await dispatch(GetSignleProductsDetails(prodcutId))
      navigate('/single/product/Details') 
   } 

    
  return (
    <HStack w={'100%'} >
 

    <Box p={['0', '16']} overflowX={'auto'}>
      <Heading children='All Products' textAlign={['center', 'left']} textTransform={'uppercase'} />
      <TableContainer w={['100vw', 'full']} >
        <Table variant={'simple'} size={'lg'}>
          <TableCaption>Aavaiable Course in the Data Base</TableCaption>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Poster</Th>
              <Th>Name</Th>
              <Th>Category</Th>
              <Th isNumeric>Price</Th>
              <Th isNumeric>Stock</Th>
              <Th isNumeric>Action</Th> 
            </Tr>
          </Thead>
          <Tbody>
            {
              products.map((item, i) => (
                <Tr key={i}>
                  <Td>{item._id}</Td>
                  <Td><Image src={item.productImages.image1.url} alt='poster' aspectRatio={'3/3'} /></Td>
                  <Td>{item.name}</Td>
                  <Td>{item.category}</Td>
                  <Td isNumeric>{item.price}</Td>
                  <Td isNumeric>{item.stock}</Td>

                  <Td isNumeric>
                    <HStack justifyContent={'flex-end'}>
                      <Button
                        variant={'outline'}
                        color={'purple.400'}
                        onClick={() => ShowSingleProductDetails(item._id)}
                        // isLoading={loading}
                        >
                        View Product 
                      </Button>
                      <Button isLoading={loading} color={'purple.600'} onClick={() => deleteHandler(item._id)} >
                        <RiDeleteBin7Fill />
                      </Button>
                    </HStack>
                  </Td>

                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </TableContainer>
  
    </Box>
  </HStack>
  )
}

export default AdminProducts