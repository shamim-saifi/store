import { Box, Button, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import logof from "../../img/LogoF.webp"
import { Link } from 'react-router-dom';
import { FaFacebookF,FaTwitter,FaInstagram   } from 'react-icons/fa';


const Footer = () => {
	return (
		<>
			<Box m={'2vmax 0'} p={'3'}  w={'100%'} bgColor={'#242424'}>
				<Stack  w={'100%'} justifyContent={'space-evenly'}  direction={{base:'column',md:'column',lg:'row'}} >
					<VStack w={{base:'100%',md:'50%',lg:'30%'}} alignItems={'flex-start'} spacing={'8'} >
            <Link to={'/'}>
						  <Image  src={logof} alt='logo' />
            </Link>
						<Text
							children={'Out believe has request not how comfort evident Up delight cousins we feeling minutes genius'}
             
              // textAlign={'center'}
              color={'whiteAlpha.700'}
              w={{base:'100%',md:'90%',lg:'70%'}}
              fontSize={['xl','lg','md','sm']}
						/>
					</VStack>

          <Stack  w={{base:'100%',md:'100%',lg:'70%'}} justifyContent={'center'} direction={{base:'column',md:'row'}} >
            <HStack w={{base:'100%',md:'50%'}}>
              <VStack w={'50%'}  alignItems={'flex-start'} > 
                <Heading color={'white'} fontSize={['xl','lg']} children={'Get Help'} />
                <VStack fontSize={'lg'} alignItems={'flex-start'} >
                  <Link  to={'/#'}>
                    <Button variant={'link'} color={'whiteAlpha.700'} children={'Help Center'}/>
                  </Link>
                  <Link  to={'/#'}>
                    <Button variant={'link'} color={'whiteAlpha.700'} children={'Track Order'}/>
                  </Link>
                  <Link  to={'/#'}>
                    <Button variant={'link'} color={'whiteAlpha.700'} children={'Shipping Info'}/>
                  </Link>
                  <Link  to={'/#'}>
                    <Button variant={'link'} color={'whiteAlpha.700'} children={'Returns'}/>
                  </Link>
                 
                </VStack>
              </VStack>
					    <VStack w={'50%'}  alignItems={'flex-start'} >
                <Heading color={'white'} fontSize={['xl','lg']}  children={'Company'} />
                <VStack fontSize={'lg'}  alignItems={'flex-start'} >
                <Link  to={'/about'}>
                    <Button variant={'link'} color={'whiteAlpha.700'} children={'About'}/>
                  </Link>
                  <Link  to={'/#'}>
                    <Button variant={'link'} color={'whiteAlpha.700'} children={'Careers'}/>
                  </Link>
                  <Link  to={'/#'}>
                    <Button variant={'link'} color={'whiteAlpha.700'} children={'Stores'}/>
                  </Link>
                  <Link  to={'/#'}>
                    <Button variant={'link'} color={'whiteAlpha.700'} children={'Want to Collab?'}/>
                  </Link>
                </VStack>
              </VStack>
            </HStack>

            <VStack w={{base:'100%',md:'50%'}}  alignItems={'flex-start'} >
              <Heading color={'white'} fontSize={['xl','lg']}  children={'Quick Links'} />
              <VStack fontSize={'lg'}  alignItems={'flex-start'}>
                  <Link  to={'/#'}>
                    <Button variant={'link'} color={'whiteAlpha.700'} children={'Size Guide'} />
                  </Link>
                  <Link  to={'/#'}>
                    <Button variant={'link'} color={'whiteAlpha.700'} children={'Gift Cards'}  />
                  </Link>
                  <Link  to={'/#'}>
                    <Button variant={'link'} color={'whiteAlpha.700'} children={'Check Gift Card Balance'}/>
                  </Link>
                  <Link  to={'/contactus'}>
                    <Button variant={'link'} color={'whiteAlpha.700'} children={'Contact Us'} />
                  </Link>
              </VStack>
            </VStack>
          </Stack>
         
				</Stack>

        <Stack borderTop={'1px solid gray'} m={'2vmax 0'}  p={'4'} direction={{base:'column',md:'row'}} justifyContent={'space-between'} alignItems={'center'} > 
          <Text color={'whiteAlpha.700'} fontSize={['xl','lg','md','sm']} children={'© 2023 Created with Royal Elementor Addons'} textAlign={'center'} />
          <HStack>
            <Button variant={'solid'} colorScheme={'white'} children={<FaFacebookF />} />
            <Button variant={'solid'} colorScheme={'white'} children={<FaTwitter />} />
            <Button variant={'solid'} colorScheme={'white'} children={<FaInstagram />} />
          </HStack>
        </Stack>
			</Box>
		</>
	);
};

export default Footer;
