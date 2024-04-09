import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	HStack,
	Heading,
	Icon,
	Image,
	Img,
    Text,
    VStack,
    useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { FiMenu,FiShoppingCart   } from 'react-icons/fi';
// import { MdArrowDropDown,MdArrowDropUp } from "react-icons/md";
import { IoMdHeartEmpty,IoIosGitCompare } from "react-icons/io";
import { FaUser } from 'react-icons/fa';

import logo from '../../img/Logo.webp';
import p1 from '../../img/p1.jpg';
import p2 from '../../img/p2.jpg';
import p3 from '../../img/p3.jpg';
import navPhoto from '../../img/navPhoto.jpg';

import { Link,  useNavigate } from 'react-router-dom';
import './MenuHeader.css';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutUser } from '../../Redux/Action/UserActions';

const MenuHeader = () => {

	const cartItemsFromLocalStorage = localStorage.getItem('cartItems');
	const usercartItems=JSON.parse(cartItemsFromLocalStorage)

	const wishlistItemsFromLocalStorage = localStorage.getItem('wishlistItems');
	const userwishlistItems=JSON.parse(wishlistItemsFromLocalStorage)
  
	const dispatch=useDispatch()
    const navigate=useNavigate()

	const { user, loading, isAuthenticated } = useSelector(
		state => state.userContainer
	);
	// console.log(user.role)

	

    const { isOpen, onOpen, onClose } = useDisclosure();
    
	const LogoutHandler=async ()=>{
		await dispatch(LogoutUser());
		navigate('/')
	}

	const closeMenuOnClick=(menuPath)=>{
		navigate(menuPath);
		onClose();

	}

	return ( 
		<>
			<HStack  p={'2vmax'} justifyContent={{base:'space-between',md:'space-between',lg:'space-evenly'}} alignItems={'center'} >
				<Icon _hover={{cursor:'pointer',color:'#bfa888'}} onClick={onOpen} as={FiMenu} color={'black'} boxSize={{base:'8',md:'9',lg:'10'}} />

                {/* side menu slider */}
				<Drawer isOpen={isOpen}	placement="left" onClose={onClose} >
					<DrawerOverlay />
					<DrawerContent>
						<DrawerCloseButton />
						<DrawerHeader>Create your account</DrawerHeader>

						<DrawerBody>
							<VStack alignItems={'flex-start'} justifyContent={'center'} >
              					<Button textAlign={'center'} w={'100%'} variant={'ghost'} colorScheme={'orange'} onClick={()=>closeMenuOnClick('/')} children={'Home'} />
              					<Button textAlign={'center'} w={'100%'} variant={'ghost'} colorScheme={'orange'} onClick={()=>closeMenuOnClick('/shop')} children={'Shop'} />
              					<Button textAlign={'center'} w={'100%'} variant={'ghost'} colorScheme={'orange'} onClick={()=>closeMenuOnClick('/about') } children={'About'} />
              					<Button textAlign={'center'} w={'100%'} variant={'ghost'} colorScheme={'orange'} onClick={()=>closeMenuOnClick('/contactus') } children={'Contact Us'} />
								{
									isAuthenticated?(
										<>
											<Button textAlign={'center'} w={'100%'} variant={'ghost'} colorScheme={'orange'} onClick={()=>closeMenuOnClick('/profile') } children={'Profile'} />
										
										</>
									):(
										null
									)
								}
              
            				</VStack>

						</DrawerBody>

						<DrawerFooter>
							<HStack w={'100%'} justifyContent={'space-between'} mb={'8'} >
              					{
              					  isAuthenticated?(
              					    <Button onClick={()=>LogoutHandler()} variant={'solid'} colorScheme={'red'} children={'Log Out'} />     
              					    ):(
              					      <>
              					     <Button colorScheme={'orange'} onClick={()=>closeMenuOnClick('/login') }  children={'Login'} />
              					     <Button colorScheme={'orange'} onClick={()=>closeMenuOnClick('/signup') }  children={'signUp'} />
              					    </>
              					  )
              					}           
            				</HStack>																						
						</DrawerFooter>
					</DrawerContent> 
				</Drawer>


                 {/* header menu one */} 
				<HStack display={{base:'none',md:'none',lg:'flex'}} >
					<div className="dropdown" >
  						<Button
							className='HoverBlackBtn'
							variant={'solid'} colorScheme={'white'} color={'black'} children={'Home'} size={'lg'} 
						/>
						
						<Box className='dropdown-content' w={'80vw'} m={'auto'} bgColor={'#2d2d2d'} color={'white'}  border={'1px solid #bfa888'}  >
							<HStack w={'100%'} p={'4'}  justifyContent={'space-evenly'} alignItems={'center'} >
								<VStack w={'25%'}  alignItems={'flex-start'}>
									<Heading children={'sale'} />
									<HStack w={'100%'} >
										<Img w={'40%'} src={p1} alt='p1' />
										<Text  children={'Ex/Aff. Delilah Cocktail Chair $180.00 $110.00'} />
									</HStack>
									<HStack w={'100%'}>
										<Img w={'40%'} src={p2} alt='p2' />
										<Text children={'Ex/Aff. Delilah Cocktail Chair $180.00 $110.00'} />
									</HStack>
									<HStack w={'100%'}>
										<Img w={'40%'} src={p3} alt='p3' />
										<Text  children={'Ex/Aff. Delilah Cocktail Chair $180.00 $110.00'} />
									</HStack>
								</VStack>
								<VStack w={'25%'}  alignItems={'flex-start'}>
									<Heading children={'sale'} />
									<HStack w={'100%'} >
										<Img w={'40%'} src={p1} alt='p1' />
										<Text children={'Ex/Aff. Delilah Cocktail Chair $180.00 $110.00'} />
									</HStack>
									<HStack w={'100%'}>
										<Img w={'40%'} src={p2} alt='p2' />
										<Text children={'Ex/Aff. Delilah Cocktail Chair $180.00 $110.00'} />
									</HStack>
									<HStack w={'100%'}>
										<Img w={'40%'} src={p3} alt='p3' />
										<Text  children={'Ex/Aff. Delilah Cocktail Chair $180.00 $110.00'} />
									</HStack>
								</VStack>
								<VStack w={'25%'} spacing={'0'}  justifyContent={'center'} alignItems={'flex-start'}>
									<Heading children={'Products'}  />
									<Text children={'Bariatric Surgery'} />
									<Text children={'Breast Surgery'} />
									<Text children={'Trending'} />
									<Text children={'Colon & Rectal Surgery'} />
									<Text children={'Endocrine Surgery'} />
									<Text children={'General Surgery'} />
									<Text children={'Gynecological Surgery'} />
									<Text children={'Trending'} />										
								</VStack>
								<HStack w={'25%'}>
									<Img w={'100%'} src={navPhoto} alt='navPhoto' />
								</HStack>	
							</HStack>
  						</Box>						
					</div>

					{/* shop menu */}
					<div className="dropdown" >
						<Button
							className='HoverBlackBtn'
							variant={'solid'} colorScheme={'white'} color={'black'} children={'Shop'} size={'lg'} 
						/>
						<Box border={'1px solid #bfa888'} className='dropdown-content' w={'15vw'}  bgColor={'white'} color={'black'}  >
							<VStack  spacing={'0'}  w={'100%'}  >

								<Link to={'/shop'} style={{width:'100%'}} >
									<Button p={'4'} _hover={{color:'white'}} w={'100%'} children={'Shope V1'} variant={'solid'} colorScheme={'white'} color={'black'}  />			
								</Link>
								<Link to={'/shop'} style={{width:'100%'}} >
									<Button p={'4'} _hover={{color:'white'}} w={'100%'} children={'Shope V2'} variant={'solid'} colorScheme={'white'} color={'black'}  />			
								</Link>
								{/* <Accordion allowToggle>
									 <AccordionItem>
									 	<h2>
											<AccordionButton>       									
												<Button p={'4'} _hover={{color:'white'}} w={'100%'} children={'Categories'} variant={'solid'} colorScheme={'white'} color={'black'}  />			
        										<AccordionIcon />
      										</AccordionButton>
										</h2>
										<AccordionPanel pb={4}>
											<Link style={{width:'100%'}} >
												<Button p={'4'} _hover={{color:'white'}} w={'100%'} children={'Shope V2'} variant={'solid'} colorScheme={'white'} color={'black'}  />			
											</Link>
											<Link style={{width:'100%'}} >
												<Button p={'4'} _hover={{color:'white'}} w={'100%'} children={'Shope V2'} variant={'solid'} colorScheme={'white'} color={'black'}  />			
											</Link>
											<Link style={{width:'100%'}} >
												<Button p={'4'} _hover={{color:'white'}} w={'100%'} children={'Shope V2'} variant={'solid'} colorScheme={'white'} color={'black'}  />			
											</Link>
										</AccordionPanel>
									 </AccordionItem>
								</Accordion> */}
								<Link to={'/shop'}  style={{width:'100%'}} >
									<Button p={'4'} _hover={{color:'white'}} w={'100%'} children={'Shope V3'} variant={'solid'} colorScheme={'white'} color={'black'}  />			
								</Link>
																
							</VStack>
						</Box>
					</div>


					{/* Single Products*/}
					<div className="dropdown" >
						<Button
							className='HoverBlackBtn'
							variant={'solid'} colorScheme={'white'} color={'black'} children={'Single Products'} size={'lg'} 
						/>
						<Box border={'1px solid #bfa888'} className='dropdown-content' w={'15vw'}  bgColor={'white'} color={'black'}  >
							<VStack  spacing={'0'}  w={'100%'}  >

								<Link to={'/shop'} style={{width:'100%'}} >
									<Button p={'4'} _hover={{color:'white'}} w={'100%'} children={'Simple Product'} variant={'solid'} colorScheme={'white'} color={'black'}  />			
								</Link>
								<Link to={'/shop'} style={{width:'100%'}} >
									<Button p={'4'} _hover={{color:'white'}} w={'100%'} children={'Variable Product'} variant={'solid'} colorScheme={'white'} color={'black'}  />			
								</Link>
								
								<Link to={'/shop'} style={{width:'100%'}} >
									<Button p={'4'} _hover={{color:'white'}} w={'100%'} children={'Grouped Product'} variant={'solid'} colorScheme={'white'} color={'black'}  />			
								</Link>
																
							</VStack>
						</Box>
					</div>

				</HStack>


                {/* logo */}
				<Box >
					<Link to={'/'}  >
						<Image boxSize={'100%'} src={logo} alt='logo' />
					</Link>
				</Box>

                {/* header menu two  */}
				<HStack display={{base:'none',md:'none',lg:'flex'}} >

					{/* MY Account*/}
					<div className="dropdown" >
						<Button
							className='HoverBlackBtn' leftIcon={ <FaUser  /> }
							variant={'solid'} colorScheme={'white'} color={'black'} children={'My Account'} size={'lg'} 
						/>
						<Box  className='dropdown-content' w={'15vw'}  bgColor={'white'} color={'black'}  >
							<VStack  spacing={'0'}  w={'100%'}  >
								{
									isAuthenticated?
										(<>				
													
														{/* <Link to={'/admin/daskboard'} style={{width:'100%'}} >
															<Button p={'4'} _hover={{color:'white'}} w={'100%'} children={'Profile'} variant={'solid'} colorScheme={'white'} color={'black'}  />			
														</Link>																					
														<Button onClick={()=>LogoutHandler()} p={'4'} _hover={{color:'white'}} w={'100%'} children={'Logout Admin'} variant={'solid'} colorScheme={'white'} color={'black'}  />																 */}
													
													
												
																								
														<Link to={'/profile'} style={{width:'100%'}} >
															<Button p={'4'} _hover={{color:'white'}} w={'100%'} children={'Profile'} variant={'solid'} colorScheme={'white'} color={'black'}  />			
														</Link>																					
													
														<Button rounded={'0'} onClick={()=>LogoutHandler()} p={'4'} _hover={{color:'white',bgColor:'#bfa888;'}} w={'100%'} children={'Logout'} variant={'solid'} colorScheme={'white'} color={'black'}  />			
												
											
										</>)
									:
										(<> 
											<Link to={'/login'} style={{width:'100%'}} >
												<Button p={'4'} _hover={{color:'white'}} w={'100%'} children={'Login'} variant={'solid'} colorScheme={'white'} color={'black'}  />			
											</Link>
											<Link to={'/signup'} style={{width:'100%'}} >
												<Button p={'4'} _hover={{color:'white'}} w={'100%'} children={'SignUp'} variant={'solid'} colorScheme={'white'} color={'black'}  />			
											</Link>
										</>)
									
								}					
							</VStack>
						</Box>
					</div>

					<Link to={'/about'} > 
                    	<Button className='HoverBlackBtn' fontSize={'lg'} children={'About'} variant={'solid'} colorScheme={'white'} color={'black'} />			    	
					</Link>
					<Link to={'/contactus'}>
                    	<Button className='HoverBlackBtn' fontSize={'lg'} children={'contact'} variant={'solid'} colorScheme={'white'} color={'black'} />			    	
					</Link>
                 

                </HStack>


                {/* cart and fav icons */}
				<HStack p={'1'}  >

					<Box pos={'relative'} > 					
						<Link  to={'/cart'}  >
                		    <Button  children={<FiShoppingCart  />} variant={'link'} fontSize={['lg','2xl']} color={'black'}  />
						</Link>				
						<HStack pos={'absolute'} right={['-5%','-10%']} top={'-30%'} justifyContent={'center'} alignItems={'center'} w={['18px','20px']} h={['18px','20px']} rounded={'100%'} bgColor={'#bfa888'} color={'white'} >
							<span >
								{usercartItems && usercartItems.length || 0}
							</span> 
						</HStack>					
					</Box>
					<Box pos={'relative'} >					
						<Link  to={'/wishlist'}>				
                    		<Button children={<IoMdHeartEmpty  />} variant={'link'} fontSize={['lg','2xl']} color={'black'} />
						</Link>			
						<HStack pos={'absolute'} right={['-5%','-10%']} top={'-30%'} justifyContent={'center'} alignItems={'center'} w={['18px','20px']} h={['18px','20px']} rounded={'100%'} bgColor={'#bfa888'} color={'white'} >
							<span >
								{userwishlistItems && userwishlistItems.length || 0}
							</span>
						</HStack>					
					</Box>
				

					<Link  to={'/#'}>				
                    	<Button children={<IoIosGitCompare  />} variant={'link'} fontSize={['lg','2xl']} color={'black'}  />
					</Link>		    
         
                </HStack>

			</HStack>

		</>
	);
};

export default MenuHeader;
