import React, { useState } from 'react'
import { Avatar, Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom' 
import { useDispatch } from 'react-redux'
import { signup } from '../../Redux/Action/UserActions'


const SignUp = ({loading}) => {
    const [name,SetName]=useState('')
    const [phone,SetPhone]=useState('')
    const [email,SetEmail]=useState('')
    const [password,SetPassword]=useState('')
    const [avatar,SetAvatar]=useState('')
  
    const dispatch=useDispatch()
    const navigate=useNavigate()

  const UserAvatarHandler=(e)=>{
    const file=e.target.files[0]
    const reader=new FileReader()
    reader.readAsDataURL(file)
    reader.onload=()=>{
      if(reader.readyState===2){
        SetAvatar(reader.result)
      }
    }
  }
  
    const SignupHandler= async (e)=>{
      e.preventDefault()
      await dispatch(signup(name,email,phone,password,avatar))
      
      // dispatch(GetAllInvoice())    
      navigate('/profile')
    }



  return (
    <VStack  w={'100%'} h={'100vh'} spacing={'16'} justifyContent={'center'} alignItems={'center'} >
    <Heading letterSpacing={'5px'} fontFamily={'Roboto'} children={'Registration to Easy Invoice system '} textAlign={'center'} />
    <Box w={{base:'90%',md:'50%'}} >
      <form onSubmit={SignupHandler}  >
        <Input focusBorderColor={'orange.400'} required value={name} onChange={(e)=>SetName(e.target.value)} fontFamily={'Roboto'} size={'lg'} fontSize={['2vmax','1.8vmax','1.2vmax']} type="text" placeholder="Enter Your Name" />
        <Input focusBorderColor={'orange.400'} required value={phone} onChange={(e)=>SetPhone(e.target.value)} fontFamily={'Roboto'} size={'lg'} fontSize={['2vmax','1.8vmax','1.2vmax']} m={'2vmax 0'}  type="email" placeholder="Enter Your Email" />
        <Input focusBorderColor={'orange.400'} required value={email} onChange={(e)=>SetEmail(e.target.value)} fontFamily={'Roboto'} size={'lg'} fontSize={['2vmax','1.8vmax','1.2vmax']} type="text" placeholder="Enter Your Phone" />
        <Input focusBorderColor={'orange.400'} required value={password} onChange={(e)=>SetPassword(e.target.value)} fontFamily={'Roboto'} size={'lg'} fontSize={['2vmax','1.8vmax','1.2vmax']} m={'2vmax 0'} type="password" placeholder="Enter Your Password" />
        <Input focusBorderColor={'orange.400'} required onChange={UserAvatarHandler} fontFamily={'Roboto'} size={'lg'} fontSize={['2vmax','1.8vmax','1.2vmax']}  type="file" />
        <Button isLoading={loading} letterSpacing={'5px'} fontFamily={'Roboto'} w={'100%'} type={'submit'} children={'SignUp'} variant={'solid'} colorScheme={'orange'} />

        <Text fontSize={['sm','md']} textAlign={'center'} m={'1vmax'}>
              I have done Registration or Singup -     
              <Button fontFamily={'Roboto'} ml={'1vmax'} variant={'link'} colorScheme={'orange'}>
                  <Link to={'/login'} >Login</Link>
              </Button>
        </Text>
      </form>
    </Box>
</VStack>
  )
}

export default SignUp