import {
    Button, HStack, useDisclosure,
    Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, DrawerHeader, DrawerFooter, Radio, VStack, Text, Avatar, Checkbox
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaSort } from 'react-icons/fa'
import { AiOutlineArrowDown } from 'react-icons/ai'
import {  BiFilterAlt } from 'react-icons/bi'
import AllFilter from "../AllFilter";
import { useDispatch } from "react-redux";
import { ProductsByPriceAndCategory, ProductsPriceHighToLow, ProductsPriceLowToHigh } from "../../../Redux/Action/ProductActions";

const sortBy = ['Price (Low to High)', 'Price (High to Low)'];
const gender = ['Boy', 'Girl', 'Man', 'Woman'];
const category = ['Bedroom','Kitchen','Dining','Modern']

export const PhoneSort = () => {
    const { isOpen, onClose, onOpen } = useDisclosure()
    const [sort, SetSort] = useState()

    const dispatch=useDispatch()

    const sortByHandler =async (item) => {
        SetSort(item)

        if(item==='Price (Low to High)'){
            await dispatch(ProductsPriceLowToHigh())
            onClose()
        }
        if(item==='Price (High to Low)'){
            await dispatch(ProductsPriceHighToLow())
            onClose()

        }

    }

    return (
        <>
            <Button
                variant={'outline'}  onClick={onOpen}
                rightIcon={<FaSort />}
                size={'md'}
                children={'Sort'}
            />

            <Drawer isOpen={isOpen} onClose={onClose} placement="bottom" >
                <DrawerOverlay />
                <DrawerContent >
                    <DrawerCloseButton />
                    <DrawerHeader>Sort by : {sort}</DrawerHeader>
                    <hr />
                    <DrawerBody>
                        <VStack w={'100%'}>
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
                    </DrawerBody>
                    <DrawerFooter>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

        </>
    )
}

export const PhoneCategorySort = () => {
    const { isOpen, onClose, onOpen } = useDisclosure()
    const [SelectCategory, SetSelectCategory] = useState()
    const dispatch=useDispatch()

    const Clear_CategPhone_AllFilter=()=>{
        
    }

    useEffect(()=>{
        dispatch(ProductsByPriceAndCategory(SelectCategory))
        onClose()
        
    },[SelectCategory])

    return (
        <>
            <Button
                variant={'outline'} onClick={onOpen}
                rightIcon={<AiOutlineArrowDown />}
                size={'md'}
                children={'Category'}
            />

            <Drawer isOpen={isOpen} onClose={onClose} placement="bottom" >
                <DrawerOverlay />
                <DrawerContent >
                    <DrawerCloseButton />
                    <DrawerHeader>Category</DrawerHeader>
                    <hr />
                    <DrawerBody>
                        <HStack flexWrap={'wrap'} w={'100%'} justifyContent={'space-evenly'}  >
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
                    </DrawerBody>
                    <DrawerFooter>
                        <HStack w={'100%'} justifyContent={'space-evenly'} >
                            <Text fontFamily={'md'} children={'1000+ Products'} />
                            {/* <Button variant={'outline'} colorScheme={'whatsapp'} children={'Clean Filter'} />
                            <Button variant={'solid'} colorScheme={'whatsapp'} children={'Done'} /> */}
                        </HStack>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export const PhoneFilterSort = () => {
    const { isOpen, onClose, onOpen } = useDisclosure()
    

    return (
        <>
            <Button
                variant={'outline'} onClick={onOpen}
                rightIcon={<BiFilterAlt />}
                size={'md'}
                children={'Filter'}
            />

            <Drawer isOpen={isOpen} onClose={onClose} placement="bottom" >
                <DrawerOverlay />
                <DrawerContent >
                    <DrawerCloseButton />
                    <DrawerHeader>Filter</DrawerHeader>
                    <hr />
                    <DrawerBody>
                        <AllFilter />                    
                    </DrawerBody>
                    <DrawerFooter>
                        <HStack w={'100%'} justifyContent={'space-evenly'} >
                            <Text fontFamily={'md'} children={'1000+ Products'} />
                            <Button variant={'outline'} colorScheme={'whatsapp'} children={'Clean Filter'} />
                            {/* <Button variant={'solid'} colorScheme={'whatsapp'} children={'Done'} /> */}
                        </HStack>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export const PhoneGenderSort = () => {
    const { isOpen, onClose, onOpen } = useDisclosure()



    return (
        <>
            <Button
                variant={'outline'}  onClick={onOpen}
                rightIcon={<AiOutlineArrowDown />}
                size={'md'}
                children={'Gender'}
            />

            <Drawer isOpen={isOpen} onClose={onClose} placement="bottom" >
                <DrawerOverlay />
                <DrawerContent >
                    <DrawerCloseButton />
                    <DrawerHeader>Gender</DrawerHeader>
                    <hr />
                    <DrawerBody>
                        <HStack flexWrap={'wrap'} w={'100%'} justifyContent={'space-evenly'}  >
                            {
                                gender.map(item => (
                                    <VStack border={'1px solid red'} w={'80px'} alignItems={'center'} >
                                        <Avatar size={'lg'} name={item} />
                                        <Text fontSize={'lg'} children={item} />
                                    </VStack>
                                ))
                            }
                        </HStack>
                    </DrawerBody>
                    <DrawerFooter>
                        <HStack w={'100%'} justifyContent={'space-evenly'} >
                            <Text fontFamily={'md'} children={'1000+ Products'} />
                            <Button variant={'outline'} colorScheme={'whatsapp'} children={'Clean Filter'} />
                            {/* <Button variant={'solid'} colorScheme={'whatsapp'} children={'Done'} /> */}
                        </HStack>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}