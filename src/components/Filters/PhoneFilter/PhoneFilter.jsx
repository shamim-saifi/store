import { HStack } from '@chakra-ui/react'
import React from 'react' 
import { PhoneCategorySort, PhoneFilterSort, PhoneGenderSort, PhoneSort } from './AllPhoneFilter'

const PhoneFilter = () => {
    return (
        <HStack w={'100%'} justifyContent={'space-around'}  >
            <PhoneSort />
            {/* <PhoneGenderSort /> */}
            <PhoneCategorySort />
            <PhoneFilterSort />
        </HStack>
    )
}

export default PhoneFilter