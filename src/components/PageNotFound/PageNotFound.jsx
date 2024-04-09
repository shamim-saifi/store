import { Button, Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiErrorWarningFill, RiErrorWarningLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <Container h={'90vh'} >
            <VStack justifyContent={'center'} h={'full'} spacing={'4'} >
                <RiErrorWarningFill size={'10vmax'} color='red' />
                <Heading textTransform={'uppercase'} >
                    Page Not Found
                </Heading>
                <Link to={'/'}>
                    <Button variant={'ghost'}  >Go to Home</Button>
                </Link>
            </VStack>
        </Container>
    )
}

export default PageNotFound