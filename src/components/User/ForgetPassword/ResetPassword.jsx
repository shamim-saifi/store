import { Box, Button, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { server } from '../../..'


const ResetPassword = () => {
  const [password,SetNewPassword]=useState('')
  const [ReEnterPassword,SetReEnterPassword]=useState('')

  const navigate=useNavigate()

  const {token}=useParams()

  const ResetPasswordHandler= async (e)=>{
    e.preventDefault()
    if(password===ReEnterPassword){
      e.preventDefault()
      try {
            const { data } = await axios.put(
              `${server}/user/reset/password/${token}`,
              {
                password
              },
              {
                headers: {
                  'Content-Type': 'application/json',
                },
                withCredentials: true,
              } 
            );
            toast.success(data.message);
            navigate('/login')         
          } catch (error) {
          toast.error(error.message);           
          }
    }else{
      toast.error('passwords do not match.')
    }
    

  }

  return (
    <VStack w={'100%'} h={'100vh'} spacing={'16'} justifyContent={'center'} alignItems={'center'}  >
    <Heading letterSpacing={'5px'} fontFamily={'Roboto'} children={'set your Password '} textAlign={'center'} />
    <Box w={{base:'90%',md:'50%'}}>
      <form onSubmit={ResetPasswordHandler} style={{padding:'1vmax'}} >
          <Input focusBorderColor={'orange.400'} required onChange={(e)=>SetNewPassword(e.target.value)} value={password} fontFamily={'Roboto'} size={'lg'} fontSize={['2vmax','1.8vmax','1.2vmax']} type="password" placeholder="Enter Your New Password" />
          <Input focusBorderColor={'orange.400'} required onChange={(e)=>SetReEnterPassword(e.target.value)} value={ReEnterPassword} fontFamily={'Roboto'} size={'lg'} fontSize={['2vmax','1.8vmax','1.2vmax']} m={'2vmax 0'} type="password" placeholder="Re-Enter Your Password" />
    
          <Button letterSpacing={'5px'} fontFamily={'Roboto'} type={'submit'} w={'100%'} children={'Forget Password'}  variant={'solid'} colorScheme={'orange'} />
    
      </form>
    </Box>
</VStack>
  )
}

export default ResetPassword