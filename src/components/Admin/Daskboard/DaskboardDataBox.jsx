import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri'


const DaskboardDataBox = ({ title, qty, qtyPercentagr, profit }) => {
  return (
    <>
        <VStack justifyContent={'center'} alignItems={'center'} w={{base:'300px',md:'200px',lg:'200px'}} h={{base:'300px',md:'200px',lg:'200px'}} border={'1px solid red'}  borderRadius={'lg'}>
            <Text children={title} />

            <HStack spacing={'8'}>
                <Text children={qty} fontSize={'2xl'} fontWeight={'bold'} />
                <HStack >
                    <Text children={`${qtyPercentagr}%`} />
                    {
                        profit ? <RiArrowUpLine color={'green'} /> : <RiArrowDownLine color={'red'} />
                    }
                </HStack>
            </HStack>
            <Text children={`Since Last Month`} opacity={'.7'} />

        </VStack>
    </>
  )
}

export default DaskboardDataBox