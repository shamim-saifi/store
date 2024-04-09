import DaskboardDataBox from './DaskboardDataBox'
import { DoughnutChart, LineChart } from '../Chart/Chart'
import ProgressBar from '../ProgressBar/ProgressBar'
import {
    Box, Button, Grid, HStack, Heading, IconButton, Image, Select, Table, TableCaption, TableContainer,
    Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
    Tbody, Td, Th, Thead, Tr, useDisclosure, VStack
  } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RiDeleteBin7Fill } from 'react-icons/ri' 
import { Tab } from 'react-bootstrap'
import { AdminDeleteOrder, AdminGetAllOrders, AdminUpdateOrderStatus } from '../../../Redux/Action/OrderActions'
import { GrUpdate } from "react-icons/gr";
import { GetSignleProductsDetails } from '../../../Redux/Action/ProductActions'


const DaskboardDataShow = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [status,setStatus]=useState('')
    const [orderId,setOrderId]=useState('')

    const {adminOrder,loading } = useSelector(
		state => state.orderContainer
	);


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deleteHandler =async (id) => {
     await dispatch(AdminDeleteOrder(id))
      dispatch(AdminGetAllOrders())
    }

    const updateOrderStatus=async (id)=>{     
      
      alert(`${id} ${status}`)

    await dispatch(AdminUpdateOrderStatus(id,status))
     dispatch(AdminGetAllOrders())

    onClose()

    }

    const ProductDetailHandler =async (id) => {
      await dispatch(GetSignleProductsDetails(id))
       navigate('/single/product/Details') 
    }

    const openStatusHandler=(id)=>{
      setOrderId(id)
      onOpen()
    }

    useEffect(()=>{
      dispatch(AdminGetAllOrders())
    },[])

  return (
   <>
    <>
        {/* <VStack w={'100%'} alignItems={'center'} spacing={'8'} >
            <Text
                children={`Last Change was on ${String(new Date()).split('G')[0]}`}
                textAlign={'center'}
            />
            <Heading children='Daskboard' textAlign={'center'} />
            <Stack w={'100%'} direction={{base:'column',md:'row',lg:'row'}} alignItems={'center'} justifyContent={{base:'center',md:'space-evenly',lg:'space-evenly'}} >
                <DaskboardDataBox title={'Order'} qty={12} qtyPercentagr={30} profit={true} />
                <DaskboardDataBox title={'users'} qty={60} qtyPercentagr={40} profit={true} />
                <DaskboardDataBox title={'Prodcuts'} qty={66} qtyPercentagr={99} profit={true} />
            </Stack>

            line chart box
            <VStack w={'80%'}  p={['0', '4']} justifyContent={'center'} alignItems={'flex-start'} borderRadius={'md'} border={'1px solid red'} >
                <Heading
                    textAlign={['center', 'left']}
                    size={'md'}
                    children='views Graph'
                    pt={['8', '8']}
                    ml={['0', '16']}
                />
                <LineChart />
            </VStack>

            progress Bar and Doughnut Chart
            <Stack w={'100%'}  direction={{base:'column',md:'column',lg:'row'}} alignItems={{base:'center',md:'center',lg:'center'}} justifyContent={{base:'center',md:'center',lg:'space-between'}}>
                    <Box w={{base:'100%',md:'70%',lg:'40%'}} p={'4'}>
                        <Heading
                            children='Progress bar'
                            textAlign={['center', 'left']}
                            size={'md'}
                            my={'8'}
                            ml={['0', '16']}
                            />
                            <Box>
                            <ProgressBar profit={true} title={'view'} value={20} />
                            <ProgressBar profit={true} title={'user'} value={90} />
                            <ProgressBar profit={false} title={'subscription'} value={30} />
                            </Box>
                            </Box>
                            <Box w={{base:'100%',md:'70%',lg:'40%'}} p={['0', '16']} boxSizing={'border-box'}>
                            <Heading children='User' textAlign={'center'} size={'md'} mb={'4'} />
                            <DoughnutChart />
                            </Box>
                            </Stack>
                        </VStack> */}
    </>




    <HStack w={'100%'} >
 

    <Box p={['0', '16']} overflowX={'auto'}>
      <Heading children='All Orders' textAlign={['center', 'left']} textTransform={'uppercase'} />
      <TableContainer w={['100vw', 'full']} >
        <Table variant='simple'  size={'lg'}>
          <TableCaption>Aavaiable Order in the Data Base</TableCaption>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Status</Th>
              <Th>User Id</Th>
              <Th >Total Price</Th>
              <Th >shipping Price</Th>
              <Th >taxPrice</Th>
              <Th >Product</Th>
              <Th >Action</Th> 
            </Tr>
          </Thead>
          <Tbody>
            {
              adminOrder && adminOrder.map((item, i) => (
                <Tr key={i}>
                    <Td>{item._id}</Td>
                    <Td >
                      {item.orderStatus}
                      <IconButton colorScheme={'orange'} variant={'ghost'} color={'white'} onClick={() => openStatusHandler(item._id)} >
                              <GrUpdate  />
                      </IconButton>

                      <Modal isOpen={isOpen} onClose={onClose}>
							          {/* <ModalOverlay /> */}
							        <ModalContent>
								        <ModalHeader>Change Order Status</ModalHeader>
								        <ModalCloseButton />
								        <ModalBody>
									        <HStack justifyContent={'space-evenly'} alignItems={'center'}  >
                            <Select  required onChange={(e)=>{setStatus(e.target.value)}} value={status} type={'text'} placeholder='Select Status'>
                              <option value={'Processing'}>Processing </option>                                                  
                              <option value={'Delivered'}>Delivered </option>                                                  
                              <option value={'Dispatch'}>Dispatch </option>                                                                                
                            </Select>

                            <Button isLoading={loading} variant={'solid'} colorScheme={'orange'} onClick={() => updateOrderStatus(orderId)} >
                              Update 
                            </Button>
									  

									        </HStack>
								        </ModalBody>

							        </ModalContent>
						          </Modal>
                       
                    </Td>
                    <Td >{item.user}</Td>
                    <Td >{item.totalPrice}</Td>
                    <Td >{item.shippingPrice}</Td>
                    <Td >{item.taxPrice}</Td>

                  {/* product nested table */}
                    <Td  w={'100%'}>                      
                      <Table variant='striped' size={'lg'}>
                        <Thead>
                          <Tr>
                            <Th>poster</Th>
                            <Th>name</Th>
                            <Th>items price</Th>
                            <Th >Product Id</Th>
                            <Th>price</Th>
                            <Th >qty</Th> 
                          </Tr>
                        </Thead>
                      </Table>
                      <Tbody w={'100%'}>
                        {
                          item.orderProduct && item.orderProduct.map((pro)=>(
                              <Tr w={'100%'} >
                                  <Td  w={'100%'}>
                                      <Image w={'100%'} src={pro.image} alt='poster' aspectRatio={'1/1'} />
                                  </Td>
                                  <Td >{pro.name}</Td>
                                  <Td >{pro.quantity*pro.price}</Td>
                                  <Td >{pro.product}</Td>
                                  <Td >{pro.price}</Td>
                                  <Td >{pro.quantity}</Td>
                              </Tr>
                          ))
                        }
                      </Tbody>                        
                    </Td>

                    <Td isNumeric>
                        <HStack justifyContent={'flex-end'}>
                          {/* <Button
                            variant={'outline'}
                            color={'purple.400'}
                            onClick={() => ProductDetailHandler(item._id)}
                            isLoading={loading}
                            >
                            View Product
                          </Button> */}
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
      {/* <ProductModel
        isOpen={isOpen}
        onClose={onClose}
        deleteButtonHandler={deleteHandler}
        addLectureHandler={addLectureHandler}
        id={courses._id}
        lecture={courses.lecture}
        courseTitle={courses.title}
        isLoading={loading}
      /> */}
    </Box>
  </HStack>




   </>
  )
}

export default DaskboardDataShow