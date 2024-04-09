import { Box, Grid, Heading, Stack, Text, VStack,Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React from 'react'
import SideBar from '../SideBar/SideBar'
import { RiAdminFill, RiAdminLine, RiDashboardFill, RiEyeFill, RiUser3Fill } from 'react-icons/ri'
import DaskboardDataShow from './DaskboardDataShow'
import CreateProducts from '../CreateProducts/CreateProducts'
import AdminProducts from '../AdminProducts/AdminProducts'
import User from '../User/User'
import { useDispatch, useSelector } from 'react-redux'
import { AdminGetAllOrders } from '../../../Redux/Action/OrderActions'

const Daskboard = () => {
  const dispatch=useDispatch()

  const loadAdminOrder=async ()=>{
   await dispatch(AdminGetAllOrders())
  }

  return (
   <>
    <Tabs m={'1vmax 0'} w={'100%'} align='center' variant='enclosed' isLazy>
      <TabList  >
        <Tab onClick={()=>loadAdminOrder()} fontSize={{base:'1.1vmax',md:'1.5vmax',lg:'1.3vmax'}} _selected={{ color: 'white', bg: '#bfa888' }}><RiDashboardFill />Orders</Tab>
        <Tab fontSize={{base:'1.1vmax',md:'1.5vmax',lg:'1.3vmax'}} _selected={{ color: 'white', bg: '#bfa888' }}><RiAdminFill />Creatproduct</Tab>
        <Tab fontSize={{base:'1.1vmax',md:'1.5vmax',lg:'1.3vmax'}} _selected={{ color: 'white', bg: '#bfa888' }}><RiEyeFill />Products</Tab>
        <Tab fontSize={{base:'1.1vmax',md:'1.5vmax',lg:'1.3vmax'}} _selected={{ color: 'white', bg: '#bfa888' }}><RiUser3Fill />User</Tab>     
      </TabList>
      {/* <TabIndicator
        height="2px"
        bg="#bfa888"
        borderRadius="1px"
    /> */}
      <TabPanels>
        <TabPanel>
          <DaskboardDataShow />
        </TabPanel>
        <TabPanel>
          <CreateProducts />
        </TabPanel>
        <TabPanel>
          <AdminProducts />
        </TabPanel>
        <TabPanel>
          <User />
        </TabPanel>
      </TabPanels>
    </Tabs>
   </>
  )
}

export default Daskboard