import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiCheckDoubleFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
    return (
        <Container h={'90vh'} p={'16'} >
            <Heading children='you have pro pack' my={'8'} textAlign={'center'} />
            <VStack boxShadow={'lg'} alignItems={'center'} spacing={'4'} >
                <Box w={'full'} bg={'yellow.400'} p={'4'}  >
                    <Text color={'black'} children='Payment Success' />
                </Box>
                <Box p={'4'}  >
                    <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'} >
                        <Text>
                            congratulation you are a pro memeber. you have success to premium content
                        </Text>
                        <Heading size={'2xl'} >
                            <RiCheckDoubleFill />
                        </Heading>
                    </VStack>
                </Box>

                <Link to={'/profile'}>
                    <Button variant={'ghost'}  >Go to Profile</Button>
                </Link>

                <Heading size={'sm'} >
                    Reference : 093820ndlsnvslfmprew
                </Heading>
            </VStack>
        </Container>
    )
}

export default PaymentSuccess