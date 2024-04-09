import {
    Box, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import SideBar from '../SideBar/SideBar'
import { useDispatch, useSelector } from 'react-redux'
import { AdminChangeUserRole, AdminDeleteUser, AdminLoadAllUser } from '../../../Redux/Action/UserActions'

const User = () => {

	const dispatch = useDispatch();
    const { allUser, loading, isAuthenticated } = useSelector(
		state => state.userContainer
	);
    // const user = [
    //     {
    //         _id: 'jdfld',
    //         name: 'shamim',
    //         email: 'dfkdjfodf',
    //         role: 'user',
    //         subscription: {
    //             status: 'active',
    //         },
    //         action: ''
    //     }
    // ]
    const deleteHandler =async (id) => {
        await dispatch(AdminDeleteUser(id))
        dispatch(AdminLoadAllUser())
        
    }
    const updateRoleHandler =async (id) => {
        const role='admin';
        await dispatch(AdminChangeUserRole(id,role))
        dispatch(AdminLoadAllUser())

    }

    useEffect(()=>{
        dispatch(AdminLoadAllUser())
    },[])
  return (
    <HStack w={'100%'} >
      

    <Box p={['0', '16']} overflowX={'auto'}>
        <Heading children='all User ' textAlign={['center', 'left']} textTransform={'uppercase'} />
        <TableContainer w={['100vw', 'full']} >
            <Table variant={'simple'} size={'lg'}>
                <TableCaption>Aavaiable User in the Data Base</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Id</Th>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th>Role</Th>
                        {/* <Th>Subscription</Th> */}
                        <Th isNumeric>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        allUser && allUser.map((item, i) => (
                            <Tr key={i}>
                                <Td>{item._id}</Td>
                                <Td>{item.name}</Td>
                                <Td>{item.email}</Td>
                                <Td>{item.role}</Td>
                                {/* <Td>
                                    #{item.subscription.status === 'active' ? 'Active' : 'Not Active'}
                                    active
                                </Td> */}
                                <Td isNumeric>
                                    <HStack justifyContent={'flex-end'}>
                                        <Button variant={'outline'} color={'purple.400'} onClick={() => updateRoleHandler(item._id)}>
                                            Change Role
                                        </Button>
                                        <Button color={'purple.600'} onClick={() => deleteHandler(item._id)} >
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

export default User