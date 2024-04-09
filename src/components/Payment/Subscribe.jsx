import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { subscirbe } from '../../redux/actions/userAction'
import axios from 'axios'
import { server } from '../../redux/store'
import toast from 'react-hot-toast'
import s1 from '../../Data/img/s1.png'


const Subscribe = ({ user }) => {
    const dispatch = useDispatch()
    const [mykey, setMyKey] = useState()
    const { loading, error, message, subscriptionId } = useSelector((state) => state.subscription)

    const subscribeHandler = async () => {
        const { data: { key }, } = await axios.get(`${server}/razorpaykey`)
        setMyKey(key)
        dispatch(subscirbe())
    }
    console.log(subscriptionId)

    useEffect(() => {
        if (error) {
            toast.error(error)
            dispatch({ type: 'clearError' })
        }
        if (message) {
            toast.success(message)
            dispatch({ type: 'clearMessage' })
        }
        if (subscriptionId) {
            const openPopUp = () => {
                const option = {
                    key: mykey,
                    name: 'shamim pro version',
                    description: 'shamim saifi first payment you won the heart',
                    image: s1,
                    subscription_id: subscriptionId,
                    callback_url: `${server}/paymentverification`,
                    prefill: {
                        name: user.user.name,
                        email: user.user.email,
                        contact: ''
                    },
                    notes: {
                        address: 'ajo bass address ke kya hai'
                    },
                    theme: {
                        color: '#3399cc'
                    }
                };


                const razor = new window.Razorpay(option)
                razor.open()
            };

            openPopUp()
        }
    }, [dispatch, error, message, mykey, subscriptionId])

    return (
        <Container h={'90vh'} p={'16'}>
            <Heading children='Welcome' my={'8'} textAlign={'center'} />

            <VStack
                boxShadow={'lg'}
                alignItems={'stretch'}
                borderRadius={'lg'}
                spacing={'0'}
            >
                <Box bg={'yellow.400'} p={'4'}  >
                    <Text children='Pro pack - ₹299.00' color={'black'} />
                </Box>
                <Box p={'4'}  >
                    <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'} >
                        <Text children='join pro pack and get access to all content' />
                        <Heading children='₹299.00 only' size={'md'} />
                    </VStack>
                    <Button w={'full'} colorScheme='yellow' my={'4'} onClick={subscribeHandler} isLoading={loading} >
                        Buy NOw
                    </Button>
                </Box>

                <Box bg={'blackAlpha.600'} p={'4'} >
                    <Heading children='100% refond at cancellation' color={'white'} textTransform={'uppercase'} size={'sm'} />
                    <Text size={'xs'} color={'white'} children='terms and condition apply' />
                </Box>
            </VStack>
        </Container>
    )
}

export default Subscribe