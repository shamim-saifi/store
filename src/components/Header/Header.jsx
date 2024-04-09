import {
	Box,
	Button,
	HStack,
	Icon,
	Input,
	InputGroup,
	InputRightElement,
	
	Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { FaFacebookF,FaTwitter,FaInstagram   } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MenuHeader from './MenuHeader';  
import { useDispatch } from 'react-redux';
import { SearchProducts } from '../../Redux/Action/ProductActions';
const Header = () => {
	const [key,setKey]=useState('')

	const dispatch=useDispatch()

	const searchHandler=async (e)=>{
		setKey(e.target.value)
		await dispatch(SearchProducts(key))

	}

	return (
<>		
    <HStack w={'100%'} p={'1vmax'} bgColor={'blackAlpha.800'} color={'white'}  alignItems={'center'} justifyContent={'space-between'}>
        <HStack  display={{base:'none',md:'flex'}}  justifyContent={'center'} alignItems={'center'}   >
			{/* <HiOutlineMail boxSize={8} /> */}
			
			{/* <Icon border={'1px solid red'} as={HiOutlineMail} boxSize={6} /> */}
			<Text  children={'Quaretriooffice@mail.com'} />
			
				
		</HStack>

		<HStack w={{base:'100%',md:'50%'}} alignItems={'center'} justifyContent={'space-between'}  >
			<InputGroup  w={'60%'}>
				<InputRightElement >
					<FiSearch color={'white'}/>
				</InputRightElement>
				<Input value={key} onChange={(e)=>searchHandler(e)} borderColor={'gray'} focusBorderColor='#bfa888' color={'white'} type="text" placeholder="Search your product" />
			</InputGroup>
			<HStack  justifyContent={'flex-end'} alignItems={'center'} w={'30%'}>
					<Link target={'_blank'} to={'/#'}>					
						<Icon  boxSize={[6,7,8]} color={'white'} >
							<FaFacebookF />
						</Icon>					
					</Link>
					<Link target={'_blank'} to={'/#'}>					
						<Icon  boxSize={[6,7,8]} color={'white'} >
							<FaTwitter />
						</Icon>					
					</Link>
					<Link target={'_blank'} to={'/#'}>					
						<Icon  boxSize={[6,7,8]} color={'white'} >
							<FaInstagram />
						</Icon>					
					</Link>
				
								
                {/* <Button	fontSize={'sm'}	variant={'solid'} color={'white'} fontWeight={'600'}>
					<Link to={'/#'}><FaTwitter /></Link>
				</Button> */}
	
        
			</HStack>
		</HStack>
	</HStack>

	<MenuHeader />
	
</>		
	);
};

export default Header;
