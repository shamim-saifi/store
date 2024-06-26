import React from 'react'
import { Button, useToast } from '@chakra-ui/react'
const Toast = () => {
    const toast = useToast()
  return (
    <>
     <Button
      onClick={() =>
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Show Toast
    </Button>
    </>
  )
}

export default Toast