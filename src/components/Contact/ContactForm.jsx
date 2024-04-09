import { Box, Button, HStack, Image, Input, Stack, Textarea } from '@chakra-ui/react';
import React, { useState } from 'react';
import formImg from '../../img/formImg.jpg'
import axios from 'axios';
import { server } from '../..';
import toast from 'react-hot-toast';

const ContactForm = () => {
    const [name,SetName]=useState('')
    const [email,SetEmail]=useState('')
    const [comment,SetComment]=useState('')

    const contactHandler=async (e)=>{
        e.preventDefault()
        try {
            const { data } = await axios.post(
                `${server }/user/contact`,
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
		<Box  w={'100%'} bgColor={'white'}>
			<Box m={'3vmax 0'} w={'100%'} bgColor={'white'}>
                <Stack w={'100%'} spacing={0}  direction={{base:'column',md:'column',lg:'row'}}>
                    <HStack p={{base:'15px',md:'8px'}} w={{base:'100%',md:'100%',lg:'50%'}} bgColor={'#e0dfdd'} justifyContent={'center'} alignItems={'center'} >
                        <form style={{width:'60%',fontSize:'1vmax'}} onSubmit={contactHandler} >
                            <Input required value={name} onChange={(e)=>SetName(e.target.value)} borderColor={'#bfa888'} focusBorderColor={'#bfa888'} color={'#bfa888'} _placeholder={{ color: '#bfa888' }} type='text' placeholder='name' />
                            <Input required value={email} onChange={(e)=>SetEmail(e.target.value)} m={'1vmax 0'} borderColor={'#bfa888'} focusBorderColor={'#bfa888'} color={'#bfa888'} _placeholder={{ color: '#bfa888' }} type='email' placeholder='email' />
                            <Input required value={comment} onChange={(e)=>SetComment(e.target.value)} borderColor={'#bfa888'} focusBorderColor={'#bfa888'} color={'#bfa888'} _placeholder={{ color: '#bfa888' }} type='text' placeholder='Your Message' />
                            <Button  m={'1vmax 0'} type='submit' variant={'solid'} colorScheme={'orange'} children={'Contact'} />
                        </form>
                    </HStack>
                    <Box w={{base:'100%',md:'100%',lg:'50%'}}>
                        <Image src={formImg} alt='formImg' />
                    </Box>
                </Stack>
            </Box>
		</Box>
	);
};

export default ContactForm;
