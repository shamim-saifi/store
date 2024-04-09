import { Box, Button, HStack, Heading, Image, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import p1 from '../../img/p1.jpg'
import { MdClose } from "react-icons/md"; 
import { useDispatch, useSelector } from 'react-redux';
import { GetAllUserOrder } from '../../Redux/Action/OrderActions';
import { Link } from 'react-router-dom';

const UserOrder = () => {
	const {order } = useSelector(
		state => state.orderContainer
	);
const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(GetAllUserOrder)
    
  },[])

  return (
    <>
    {
      order && order.length>=1?(
        <Box  border={'1px solid black'}  p={'10'}  >
            <Box m={'4vmax 0'} >
                <Heading children={'Order'} />
                <Text children={'Debating me breeding be answered.'} />
            </Box>
            <Box>
            <TableContainer>
                <Table size='lg' variant='simple'>
                  <Thead>
                    <Tr>
                      <Th>Order ID</Th>
                      <Th>Customer Name</Th>
                      <Th>Order Date</Th>
                      <Th>Order Status</Th>
                      <Th>Total Price</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                  {
                    order && order.length>=1 && order.map((item,i) => (
                      <Tr key={i}>
                        <Td>{item._id}</Td>
                        <Td>{item.user}</Td>
                        <Td>{item.deliveredAt}</Td>
                        <Td>{item.orderStatus}</Td>
                        <Td>{item.totalPrice}</Td>
                      </Tr>
                    ))
                  }
                        {/* <>
                          <Td >processing</Td>
                          <Td >
                            <Button onClick={()=>showOrderTrack()} children={'Track Order'} variant={'solid'} colorScheme={'orange'} />
                          </Td>
                        </> */}
                
                    
              
                  </Tbody>
               
                </Table>
            </TableContainer>
            </Box>
        </Box>

      ):(
        <>
          <Text textAlign={'center'} fontSize={['sm','md']} m={'1vmax'}>
              Not add Order  
              <Button ml={'1vmax'} variant={'link'} colorScheme={'orange'}>
                <Link to={'/shop'} >Add Now</Link>
              </Button>
          </Text>
        </>
        
      )
    }
        
    </>
  )
}

export default UserOrder