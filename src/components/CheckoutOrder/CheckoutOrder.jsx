import { Box, Button, HStack, Heading, Image, Input, Select, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'


import { Country, State, City }  from 'country-state-city'; 
import OrderCard from './OrderCard';



import { useNavigate } from 'react-router-dom'; 

const CheckoutOrder = () => {
    const [UserCity,SetUserCity]=useState('')
    const [UserState,SetUserState]=useState('')
    const [UserCountry,SetUserCountry]=useState('')
    const [fname,SetFname]=useState('') 
    const [lname,SetLname]=useState('') 
    const [address,SetAddress]=useState('') 
    const [email,SetEmail]=useState('')
    const [phone,SetPhone]=useState('')
    const [pinCode,SetPinCode]=useState('')

    let testUserStatecode=UserState.split(',')[1]

    let shippingAddress=[
        {
            name:`${fname} ${lname}`,
            email,
            phone,
            address,
            pinCode,
            pinCode,
            country:UserCountry,
            state:UserState,
            city:UserCity,
        }
    ]

    const shippingFromLocalStorage = localStorage.getItem('shipping');
    const shippingFromLocal=JSON.parse(shippingFromLocalStorage)

    const navigate=useNavigate()

    const moveToPlaceOrder=(e)=>{
        e.preventDefault()
        localStorage.setItem('shipping', JSON.stringify(shippingAddress));

        navigate('/placeorder')
    }

  return (
    <>
        <Box w={'100%'} p={{base:'4',md:'8',lg:'10'}} >
            <Box w={'100%'} m={'4vmax 0'} >
                <Heading children={'Checkout'} />
                <Text children={'Debating me breeding beautiful  answered.'} />
            </Box>
            <VStack spacing={'4'} p={{base:'2',md:'3',lg:'5'}} border={'1px solid gray'} alignItems={'center'}  >
                {/* fill form of user shipping */}

                <Heading children={'Billing details'} />
                <form onSubmit={moveToPlaceOrder} style={{width:'100%',margin:'auto'}}>  
                    <VStack w={{base:'100%',md:'100%',lg:'70%'}} spacing={'6'} border={'1px solid black'} rounded={'md'} p={'4'} alignItems={'flex-start'}  >
                        <HStack>
                            <Input required onChange={(e=>SetFname(e.target.value))} value={fname} type={'text'} placeholder={'Your First Name'} />
                            <Input required onChange={(e=>SetLname(e.target.value))} value={lname} type={'text'} placeholder={'Your Last Name'} />
                        </HStack>
                        <Input required onChange={(e=>SetEmail(e.target.value))} value={email} type={'email'} placeholder={'Your Email'} />
                        <Input required onChange={(e=>SetPhone(e.target.value))} value={phone} type={'text'} placeholder={'Phone *'} />
                        <Input required onChange={(e=>SetAddress(e.target.value))} value={address} type={'text'} placeholder={'Street address *'} />
                        <Input required onChange={(e=>SetPinCode(e.target.value))} value={pinCode} type={'text'} placeholder={'ZIP Code *'} />
                        <Select required onChange={(e)=>{SetUserCountry(e.target.value)}} value={UserCountry} type={'text'} placeholder='Select Country'>              
                                <option value={Country.getCountryByCode('IN').name}>{Country.getCountryByCode('IN').name}</option>                     
                        </Select>
                        <Select required onChange={(e)=>{SetUserState(e.target.value)}} value={UserState} type={'text'} placeholder='Select State'>
                                {
                                    State.getStatesOfCountry('IN').map((item,i)=>(                         
                                        <option key={i} value={`${item.name},${item.isoCode}`}>{`${item.name}, ${item.isoCode}`} </option>                                                  
                                    ))
                                } 
                        </Select>
                        <Select required onChange={(e)=>{SetUserCity(e.target.value)}} value={UserCity} type={'text'} placeholder='Select City'>
                                {
                                    City.getCitiesOfState('IN',testUserStatecode).map((item,i)=>(                           
                                        <option key={i} value={item.name}>{item.name}</option>                     
                                        ))
                                    } 
                        </Select>
                    
                        <Button type={'submit'} variant={'solid'} colorScheme={'orange'} children={'Process To Checkout'} />
                    </VStack>
                </form>



                {/* Your order price */}
           
            </VStack>

        </Box>
    </>
  )
}

export default CheckoutOrder