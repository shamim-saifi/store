import React, { useState } from 'react'
import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginUser } from '../../Redux/Action/UserActions';
import { useDispatch } from 'react-redux';


const Login = ({loading}) => {
    const [email,SetEmail]=useState('')
    const [password,SetPassword]=useState('') 

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const LoginHandler= async (e)=>{
        e.preventDefault()
        await dispatch(LoginUser(email,password));
    
        navigate('/profile')
      }
      
  return (
    <VStack  w={'100%'} h={'100vh'} spacing={'16'} justifyContent={'center'} alignItems={'center'} >
    <Heading letterSpacing={'5px'} fontFamily={'Roboto'} children={'Login to Easy Invoice system '} textAlign={'center'} />
    <Box w={{base:'90%',md:'50%'}} >
      <form onSubmit={LoginHandler} > 
        <Input focusBorderColor={'orange.400'} required onChange={(e)=>SetEmail(e.target.value)} value={email} fontFamily={'Roboto'} size={'lg'} fontSize={['2vmax','1.8vmax','1.2vmax']} type="text" placeholder="Enter Your Email" />
        <Input focusBorderColor={'orange.400'} required onChange={(e)=>SetPassword(e.target.value)} value={password} fontFamily={'Roboto'} size={'lg'} fontSize={['2vmax','1.8vmax','1.2vmax']} m={'2vmax 0'} type="password" placeholder="Enter Your Password" />
        <Button isLoading={loading} letterSpacing={'5px'} fontFamily={'Roboto'} type={'submit'} w={'100%'} children={'Login'}  variant={'solid'} colorScheme={'orange'} />


        <Stack justifyContent={['center','space-around']} alignItems={'center'} direction={{base:'column',md:'row'}} >
            <Text textAlign={'center'} fontSize={['sm','md']} m={'1vmax'}>
                I don't have Account -   
                <Button ml={'1vmax'} variant={'link'} colorScheme={'orange'}>
                    <Link to={'/signup'} >SignUp</Link>
                </Button>
            </Text>

            <Button size={['sm','md']} variant={'link'} colorScheme={'orange'}>
                <Link   to={'/forgetpassword'} >Forget Password</Link>
            </Button>
        </Stack>
      </form>
    </Box>
  </VStack>
  )
}

export default Login