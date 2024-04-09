import { Button, Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiCheckDoubleFill, RiErrorWarningFill, RiErrorWarningLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const PaymentFail = () => {
    return (
        <Container h={'90vh'} >
            <VStack justifyContent={'center'} h={'full'} spacing={'4'} >
                <RiErrorWarningFill size={'10vmax'} color='red' />
                <Heading textTransform={'uppercase'} >
                    Payment Fail
                </Heading>
                <Link to={'/subscribe'}>
                    <Button variant={'ghost'}  >Try Again</Button>
                </Link>
            </VStack>
        </Container>
    )
}

export default PaymentFail