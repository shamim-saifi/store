import React from 'react'
import { Box, Button, HStack, Heading, Icon, Image, Input, Progress, Stack, Text, Textarea, VStack } from '@chakra-ui/react'
import './About.css'
import { FaQuoteLeft } from 'react-icons/fa'
import Sannah from '../../img/Sannah.png'

const About = () => {
  return (
    <>
        <HStack id={'About'}  w={'100%'} h={'70vh'} p={'2'} justify={'center'} alignItems={'center'} >
            {/* <Image border={'1px solid red'} boxSize={'100%'} src={contactImg} alt='contactImg' /> */}
            <Heading letterSpacing={'10px'} fontFamily={'Kanit, sans-serif'} fontSize={'11vmax'} fontWeight={'800'} color={'blackAlpha.500'} children={'About'} />
        </HStack>

        <HStack w={'100%'} justifyContent={'center'} alignItems={'center'} >
				<VStack m={'3vmax 0'} w={{base:'90%',md:'70%'}}  spacing={'7'}  >
                    <Box  color={'blackAlpha.600'} >
					    <FaQuoteLeft size={'3.5vmax'} />
                    </Box>
					<Text
						children={`Far curiosity incommode now led smallness allowance Favour bed assure son things yet She consisted consulted elsewhere
                        happiness disposing household any old the Widow downs you new shade drift hopes small So otherwise commanded
                        sweetness we improving Instantly by daughters resembled unwilling principle so middleton
                        `}
                        color={'blackAlpha.900'} textAlign={'center'}
					/>
                    <Image w={'20%'} src={Sannah} alt='Sannah'/>
				</VStack>
		</HStack>

        <Stack spacing={'8'} bgColor={'#eee'} p={'16'} w={'100%'} direction={{base:'column',md:'row'}}>
            <VStack w={{base:'100%',md:'50%'}} alignItems={'flex-start'} >
                <Heading children={'Best Quality For Your Comfort!'} />
                <Text children={`Pleased him another was settled for. Moreover end horrible endeavor entrance any families 
                Income appear extent on of thrown in admire Stanhill on we if vicinity material in
                Saw him smallest you provided ecstatic supplied 
                Garret wanted expect remain as mr Covered parlors concern we express in visited to do. 
                Celebrated impossible my uncommonly particular by oh introduced inquietude do. Suppose end get boy 
                warrant general natural
                `} />
                <Button variant={'solid'} colorScheme={'orange'} children={'Shop Now'} />
            </VStack>
            <VStack spacing={'8'} w={{base:'100%',md:'50%'}} >
                <VStack w={'100%'}>
                    <HStack w={'100%'} justifyContent={'space-between'} alignItems={'center'} >
                        <Text children={'Quality'} />
                        <Text children={'70%'} />
                    </HStack>
                    <Progress w={'100%'} size='xl'  colorScheme={'#bfa888'} value={70} >70</Progress>
                </VStack>
                <VStack w={'100%'}>
                    <HStack w={'100%'} justifyContent={'space-between'} alignItems={'center'} >
                        <Text children={'Design'} />
                        <Text children={'90%'} />
                    </HStack>
                    <Progress w={'100%'} size='xl' colorScheme='orange' value={90} >90</Progress>
                </VStack>
                <VStack w={'100%'}>
                    <HStack w={'100%'} justifyContent={'space-between'} alignItems={'center'} >
                        <Text children={'Marketing'} />
                        <Text children={'50%'} />
                    </HStack>
                    <Progress w={'100%'} size='xl' colorScheme={'orange'} value={50} >50</Progress>
                </VStack>
                <VStack w={'100%'}>
                    <HStack w={'100%'} justifyContent={'space-between'} alignItems={'center'} >
                        <Text children={'Development'} />
                        <Text children={'40%'} />
                    </HStack>
                    <Progress w={'100%'} size='xl' colorScheme={'orange'} value={40} >40</Progress>
                </VStack>

            </VStack>
        </Stack>
    </>
  )
}

export default About