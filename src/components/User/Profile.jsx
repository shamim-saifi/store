import {
	Avatar,
	Box,
	Button,
	HStack,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Text,
	VStack,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	TabIndicator,
	useDisclosure,
	Input,Stack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Wishlist from '../Wishlist/Wishlist';
import Cart from '../Cart/Cart';
import UserOrder from './UserOrder';
import { useDispatch, useSelector } from 'react-redux';
import {
	ChangeAvatarUser,
	LoadUser,
	UpdateUserDetails,
} from '../../Redux/Action/UserActions';
import { useNavigate } from 'react-router-dom';
import Daskboard from '../Admin/Daskboard/Daskboard';
import { GetAllUserOrder } from '../../Redux/Action/OrderActions';

const Profile = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [showModel, setShowModel] = useState(2);
	const [avatar, setUserAvatar] = useState('');
	const [name, SetName] = useState('');
	const [phone, SetPhone] = useState('');
	const [email, SetEmail] = useState('');
	const [address, SetAddress] = useState('');

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { user, loading, isAuthenticated } = useSelector(
		state => state.userContainer
	);


	const showModelHandler = i => {
		setShowModel(i);
		onOpen();
	};

	const UserAvatarHandler = e => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			if (reader.readyState === 2) {
				setUserAvatar(reader.result);
			}
		};
	};

	const ChangeAvatarHandler = async () => {
		await dispatch(ChangeAvatarUser(avatar));
		dispatch(LoadUser())

		onClose();
		navigate('/profile');
	};

	const ChangeUserDetailsHandler = async () => {
		await dispatch(UpdateUserDetails(name, phone, email, address));
		dispatch(LoadUser())

		onClose();
		navigate('/profile');
	};

	const orderLoader= ()=>{
		 dispatch(GetAllUserOrder());
	}

	useEffect(()=>{
		dispatch(GetAllUserOrder());

	},[])


	return (
		<>
			<Box w={{base:'70%',md:'50%',lg:'50%'}} m={'auto'}>
				<Stack direction={{base:'column',md:'row'}} w={'100%'} border={'1px solid black'} rounded={'md'} m={'1vmax 0'} 	justifyContent={'center'}	>

					{/* Avatar and change Model */}
					<VStack alignSelf={'center'} w={'50%'} spacing={'4'} p={'4'} >
						<Avatar size={'2xl'} src={user.avatar && user.avatar.url} name={user.name} />
						<Button
							onClick={() => showModelHandler(1)}
							variant={'link'}
							children={'change Photo'}
							color={'#bfa888'}
							fontWeight={'600'}
						/>
						<Modal isOpen={showModel === 1 ? isOpen : null} onClose={onClose}>
							<ModalOverlay />
							<ModalContent>
								<ModalHeader>Change Your Profile</ModalHeader>
								<ModalCloseButton />
								<ModalBody>
									<VStack spacing={'4'}>
										<Input
											css={{
												'&::file-selector-button': {
													cursor: 'pointer',
													width: '110%',
													marginLeft: '-5%',
													border: 'none',
													height: '100%',
													color: 'blue',
													backgroundColor: 'white',
												},
											}}
											onChange={UserAvatarHandler}
											type="file"
											placeholder="files"
											accept="image/*"
										/>
									</VStack>
								</ModalBody>

								<ModalFooter>
									<Button
										onClick={ChangeAvatarHandler}
										children={'submit'}
										mr={3}
										variant={'solid'}
										colorScheme={'orange'}
										isLoading={loading}
									/>
									<Button
										children={'Close'}
										colorScheme="blue"
										onClick={onClose}
										isDisabled={loading}
									/>
								</ModalFooter>
							</ModalContent>
						</Modal>
					</VStack>

					{/* User Details and change Model */}
					<VStack	w={'50%'} spacing={'4'} p={'4'}	alignItems={'flex-start'}>
						<Text children={user.name} />
						<Text children={user.email} />
						<Text children={user.phone} />
						<Text children={user.address || 'Add Your Address'} />
						{/* <Text children={'730 7th floor gaur city center noida'} /> */}
						<Button
							onClick={() => showModelHandler(2)}
							variant={'link'}
							children={'change Profile'}
							color={'#bfa888'}
							fontWeight={'600'}
						/>
						<Modal isOpen={showModel === 2 ? isOpen : null} onClose={onClose}>
							<ModalOverlay />
							<ModalContent>
								<ModalHeader>Change Your Details</ModalHeader>
								<ModalCloseButton />
								<ModalBody>
									<VStack spacing={'4'}>
										<Input
											value={name}
											onChange={e => SetName(e.target.value)}
											type="text"
											placeholder="name"
										/>
										<Input
											value={email}
											onChange={e => SetEmail(e.target.value)}
											type="email"
											placeholder="email"
										/>
										<Input
											value={address}
											onChange={e => SetAddress(e.target.value)}
											type="text"
											placeholder="address"
										/>
										<Input
											value={phone}
											onChange={e => SetPhone(e.target.value)}
											type="const name = new type(arguments);"
											placeholder="phone"
										/>
									</VStack>
								</ModalBody>

								<ModalFooter>
									<Button
										onClick={ChangeUserDetailsHandler}
										children={'submit'}
										mr={3}
										variant={'solid'}
										colorScheme={'orange'}
										isLoading={loading}
									/>
									<Button
										children={'Close'}
										colorScheme="blue"
										onClick={onClose}
										isDisabled={loading}
									/>
								</ModalFooter>
							</ModalContent>
						</Modal>
					</VStack>

				</Stack>
			</Box>
			{user.role && user.role === 'admin' ? (
				<Daskboard />
			) : (
				<>
					<Tabs m={'2.5vmax 0'} isFitted variant="enclosed">
						<TabList mb="1em">
							<Tab onClick={()=>orderLoader()} _selected={{ color: 'white', bg: '#bfa888' }}>Order</Tab>
							<Tab _selected={{ color: 'white', bg: '#bfa888' }}>Cart</Tab>
							<Tab _selected={{ color: 'white', bg: '#bfa888' }}>wishlist</Tab>
						</TabList>

						{/* <TabIndicator height="2px" 	bg="#bfa888" borderRadius="1px"	/>	 */}

						<TabPanels>
							<TabPanel>
								<UserOrder />
							</TabPanel>
							<TabPanel>
								<Cart />
							</TabPanel>
							<TabPanel>
								<Wishlist />
							</TabPanel>
						</TabPanels>
					</Tabs>
				</>
			)}
		</>
	);
};

export default Profile;
