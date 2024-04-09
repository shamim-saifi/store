import React, { useState } from 'react'
import { Box, Button, HStack, Heading, Icon, Input, Stack, Text, Textarea, VStack } from '@chakra-ui/react'

import { IoMdMail,IoMdCall } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

import './ContactUs.css'
import axios from 'axios';
import toast from 'react-hot-toast';
import { server } from '../..';


const ContactUs = () => {
    const [name,SetName]=useState('')
    const [email,SetEmail]=useState('')
    const [comment,SetComment]=useState('')

    const contactUsHandler=async (e)=>{
        e.preventDefault()
        try {
            const { data } = await axios.post(
                `${server}/user/contact`,
                {
                    name,email,comment
                },
                {
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  withCredentials: true,
                } 
            );
            toast.success(data.message);
            
        } catch (error) {
            toast.error(error.message);           
        }
       
    }
    
  return (
    <>
        <HStack id={'ContactUs'}  w={'100%'} h={'70vh'} p={'2'}  justify={'center'} alignItems={'center'} >
            {/* <Image border={'1px solid red'} boxSize={'100%'} src={contactImg} alt='contactImg' /> */}
            <Heading letterSpacing={'10px'} fontFamily={'Kanit, sans-serif'} fontSize={'11vmax'} fontWeight={'800'} color={'blackAlpha.500'} children={'Contact Us'} />
        </HStack>
        <Stack w={'100%'}  direction={{base:'column',md:'row'}} alignItems={'center'} justifyContent={{base:'center',md:'space-around'}} >
            <VStack w={{base:'100%',md:'50%'}}  p={{base:'8',md:'10'}} spacing={'10'} alignItems={'flex-start'} >
                <VStack  alignItems={'flex-start'}>
                    <Heading children={'For Any Information Contact Us'} />
                    <Text children={'Dwelling and speedily ignorant any steepest. Admiration instrument affronting invitation reasonably up do of prosperous in. Shy saw declared age.'} />

                </VStack>
                <VStack  spacing={'6'} alignItems={'flex-start'} >
                    <HStack >
			            <Icon color={'#bfa888'} as={IoMdCall} boxSize={10} />
                        <VStack spacing={'0'} justifyContent={'center'} alignItems={'flex-start'} >
                            <Text children={'Office Phone Number'} />
                            <Text children={'+1 (662) 258-5616'} />
                        </VStack>
                    </HStack>
                    <HStack  >
			            <Icon color={'#bfa888'} as={IoMdMail} boxSize={10} />
                        <VStack spacing={'0'} justifyContent={'fle'} alignItems={'flex-start'} >
                            <Text children={'Kagan Email'} />
                            <Text children={'Kaganswimwear@mail.com'} />
                        </VStack>
                    </HStack>
                    <HStack >
			            <Icon color={'#bfa888'} as={MdLocationOn} boxSize={10} />
                        <VStack spacing={'0'} justifyContent={'center'} alignItems={'flex-start'} >
                            <Text children={'Our Office Address'} />
                            <Text children={'5954 Old Cove Heath Rd Eupora, Mississippi(MS), 39744'} />
                        </VStack>
                    </HStack>
                </VStack>
            </VStack>

            <Box w={{base:'90%',md:'50%'}}   p={{base:'5',md:'10'}} >
                <form onSubmit={contactUsHandler}>
                    <Input required value={name} onChange={(e)=>SetName(e.target.value)} focusBorderColor={'#bfa888'} type='text' variant='outline' placeholder='name' />
                    <Input required value={email} onChange={(e)=>SetEmail(e.target.value)}  focusBorderColor={'#bfa888'} style={{margin:'1.5vmax 0'}} type='email' variant='outline' placeholder='email' />
                    <Textarea required value={comment} onChange={(e)=>SetComment(e.target.value)} focusBorderColor={'#bfa888'} rows={'6'} cols={'6'} placeholder='Write Your Message' size='sm' resize={'none'}  />
                    <Button m={'1vmax 0'} type={'submit'} children={'Submit'} colorScheme={'orange'} />
                </form>
            </Box>
        </Stack>
    </>
  )
}

export default ContactUs