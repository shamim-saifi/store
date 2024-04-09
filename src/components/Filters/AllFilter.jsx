import {
    Heading, Stack, Text, VStack, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel,
    Box, HStack, Button, Checkbox
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { LoadAllProducts, ProductsByPriceAndCategory, ProductsPriceHighToLow, ProductsPriceLowToHigh } from '../../Redux/Action/ProductActions';

const AllFilter = () => {
    const sortBy = ['Price (Low to High)', 'Price (High to Low)'];
    // const gender = ['Boy', 'Girl', 'Man', 'Woman']; 
    // const colors = ['Blue', 'Pink', 'Black', 'White', 'Beige', 'Brown', 'Grey', 'Maroon', 'Orange'];
    const prices = ['199', '249', '399', '449'];
    const category = ['Bedroom','Kitchen','Dining','Modern']

    const [sort, SetSort] = useState()
    const [priceActive, SetPriceActive] = useState()
    const [SelectCategory, SetSelectCategory] = useState()

    const [clearCheckBox, SetClearCheckBox] = useState()
    const [genderActive, SetgenderActive] = useState()
    const [colorActive, SetColorActive] = useState()

    const dispatch=useDispatch()

    const sortByHandler =async (item) => {
        SetSort(item)

        if(item==='Price (Low to High)'){

            await dispatch(ProductsPriceLowToHigh())
        }
        if(item==='Price (High to Low)'){

            await dispatch(ProductsPriceHighToLow())
        }

    }

    const ClearFilterHandler = () => {
        SetSort('')
        SetgenderActive('')
        SetColorActive('')
        SetPriceActive('')
        SetSelectCategory('')
        SetClearCheckBox(1)

        dispatch(LoadAllProducts())

    }

    useEffect(()=>{
        dispatch(ProductsByPriceAndCategory(SelectCategory,priceActive))
        
    },[SelectCategory,priceActive])

    return (
        <>

            <Stack margin={{ base: '0', md: '10px' }} w={'100%'}   >
                <VStack  >
                    <Heading fontSize={'lg'} children={'Filter'} />
                    <Text children={'2000+ Products'} />
                </VStack>
                <VStack border={'1px solid black'} w={'100%'} justifyContent={'flex-start'} >
                    <Accordion p={'10px'} defaultIndex={[0]} allowMultiple w={'100%'} >
                        <AccordionItem display={{ base: 'none', md: 'block' }}  p={'10px'}>
                            <HStack justifyContent={'space-evenly'} >
                                <Text fontSize={'lg'} children={'Clear Fillter'} />
                                <Button fontSize={'lg'}  onClick={()=> ClearFilterHandler()} variant={'ghost'} colorScheme={'whatsapp'} children={'CLEAR'} />
                            </HStack>
                        </AccordionItem>

                        {/* sort by item list */}
                        <AccordionItem p={'5px'}>
                            <h2  >
                                <AccordionButton>
                                    <Box fontSize={'md'} as="span" flex='1' textAlign='left'>
                                        Sort by : {sort}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                <VStack w={'100%'} alignItems={'flex-start'}>
                                    {
                                        sortBy.map((item,i) => (
                                            <Text
                                                key={i}
                                                w={'100%'} cursor={'pointer'}
                                                fontSize={'md'}
                                                children={item}
                                                onClick={() => sortByHandler(item)}
                                            />
                                        ))
                                    }
                                </VStack>
                            </AccordionPanel>
                        </AccordionItem>

                        {/*filter by category */}
                        <AccordionItem p={'5px'}>
                            <h2>
                                <AccordionButton>
                                    <Box fontSize={'lg'} as="span" flex='1' textAlign='left'>
                                        Category
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                <HStack flexWrap={'wrap'}  >
                                    {
                                            category.map((item,i) => (
                                            <Button
                                                key={i}
                                                fontSize={'md'} variant={SelectCategory === item ? 'solid' : 'outline'} colorScheme='whatsapp'
                                                children={`${item}`}
                                                onClick={() => SetSelectCategory(item)}
                                            />
                                        ))
                                    }
                                </HStack>
                            </AccordionPanel>
                        </AccordionItem>

                        {/* filter by price */}
                        <AccordionItem p={'5px'}>
                            <h2>
                                <AccordionButton>
                                    <Box fontSize={'lg'} as="span" flex='1' textAlign='left'>
                                        Price
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                <HStack flexWrap={'wrap'}  >
                                    {
                                        prices.map((item,i) => (
                                            <Button
                                                key={i}
                                                fontSize={'md'} variant={priceActive === item ? 'solid' : 'outline'} colorScheme='whatsapp'
                                                children={`₹ ${item}`}
                                                onClick={() => SetPriceActive(item)}
                                            />
                                        ))
                                    }
                                </HStack>
                            </AccordionPanel>
                        </AccordionItem>


                        {/*filter by gender list */}
                        {/* <AccordionItem p={'5px'}>
                            <h2>
                                <AccordionButton>
                                    <Box fontSize={'lg'} as="span" flex='1' textAlign='left'>
                                        Gender
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                <HStack flexWrap={'wrap'} >
                                    {
                                        gender.map(item => (
                                            <Button
                                                fontSize={'lg'} variant={genderActive === item ? 'solid' : 'outline'} colorScheme='whatsapp'
                                                children={item}
                                                onClick={() => SetgenderActive(item)}
                                            />
                                        ))
                                    }
                                </HStack>
                            </AccordionPanel>
                        </AccordionItem> */}

                        {/* filter by color */}
                        {/* <AccordionItem p={'5px'}>
                            <h2>
                                <AccordionButton>
                                    <Box fontSize={'lg'} as="span" flex='1' textAlign='left'>
                                        Colors
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                <HStack flexWrap={'wrap'} >
                                    {
                                        colors.map(item => (
                                            <Button
                                                fontSize={'lg'} variant={colorActive === item ? 'solid' : 'outline'} colorScheme='whatsapp'
                                                children={item}
                                                onClick={() => SetColorActive(item)}
                                            />
                                        ))
                                    }
                                </HStack>
                            </AccordionPanel>
                        </AccordionItem> */}

                    </Accordion>
                </VStack>

            </Stack>
        </>
    )
}

export default AllFilter