import { Button, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RiAdminFill, RiAdminLine, RiDashboardFill, RiEyeFill, RiUser3Fill } from 'react-icons/ri'


const SideBar = () => {
    const location=useLocation() 

  return (
    <Stack
        w={'100%'}  spacing={{base:'1',md:'5',lg:'8'}} p={{base:'4',md:'5',lg:'10'}} boxShadow={'1px 0 5px black'}
        direction={{base:'row',md:'row',lg:'column'}} 
        justifyContent={{base:'space-evenly',md:'space-evenly',lg:'flex-start'}} 
        alignItems={{base:'center',md:'center',lg:'center'}}
    >
        <LinkButton Icon={RiDashboardFill} url={'daskboard'} text={'Daskboard'} active={location.pathname==='/admin/daskboard'}/>
        <LinkButton Icon={RiAdminFill} url={'creatproduct'} text={'Creatproduct'} active={location.pathname==='/admin/createcourse'}/>
        <LinkButton Icon={RiEyeFill} url={'adminproducts'} text={'Products'} active={location.pathname==='/admin/adminproducts'}/>
        <LinkButton Icon={RiUser3Fill} url={'user'} text={'User'} active={location.pathname==='/admin/user'}/>   
    </Stack>
  )
}

export default SideBar;

function LinkButton({ url, Icon, text,active }) {
    return (
        <Link style={{border:'1px solid red',}} to={`/admin/${url}`}>
            <Button  p={'0'} fontSize={{base:'2vmax',md:'1.5vmax',lg:'1.2vmax'}} variant={'ghost'} colorScheme={active?'purple':''} >
                <Icon />
                {text}
            </Button>
        </Link>
    )
}