import React, { Suspense, lazy, useEffect } from 'react';
import './App.css';
import { CircularProgress, Stack } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { LoadUser } from './Redux/Action/UserActions';
import { LoadAllProducts } from './Redux/Action/ProductActions';
import { GetAllUserOrder } from './Redux/Action/OrderActions';

import ForgetPassword from './components/User/ForgetPassword/ForgetPassword';
import ResetPassword from './components/User/ForgetPassword/ResetPassword';

const PlaceOrder = lazy(() => import('./components/CheckoutOrder/PlaceOrder'));
const Shop = lazy(() => import('./components/Shop/Shop'));

const Cart = lazy(() => import('./components/Cart/Cart'));
const Wishlist = lazy(() => import('./components/Wishlist/Wishlist'));
const CheckoutOrder = lazy(() => import('./components/CheckoutOrder/CheckoutOrder'));

const Daskboard = lazy(() => import('./components/Admin/Daskboard/Daskboard'));
const CreateProducts = lazy(() => import('./components/Admin/CreateProducts/CreateProducts'));
const AdminProducts = lazy(() => import('./components/Admin/AdminProducts/AdminProducts'));
const User = lazy(() => import('./components/Admin/User/User'));

const SingleProductDetails = lazy(() => import('./components/Products/SingleProduct/SingleProductDetails'));

const Login = lazy(() => import('./components/User/Login'));
const SignUp = lazy(() => import('./components/User/SignUp'));
const Profile = lazy(() => import('./components/User/Profile'));

const Header = lazy(() => import('./components/Header/Header'));
const Home = lazy(() => import('./components/Home/Home'));
const ContactUs = lazy(() => import('./components/Contact/ContactUs'));
const About = lazy(() => import('./components/About/About'));
const Footer = lazy(() => import('./components/Footer/Footer'));

function App() {
	const {  loading, isAuthenticated } = useSelector(
		state => state.userContainer
	);
	
	const dispatch=useDispatch()

    // const navigate=useNavigate()

useEffect(()=>{
	dispatch(LoadUser())
    dispatch(LoadAllProducts())
	dispatch(GetAllUserOrder());

},[])
	return (
		<BrowserRouter> 
			<Suspense fallback={
          		<Stack w={'100%'} h={'100vh'} justifyContent={'center'} alignItems={'center'} >
          		  <CircularProgress thickness="4px" size={'20vmax'} isIndeterminate color="#bfa888" />
          		</Stack>
        		}
      		>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login loading={loading} />} />
					<Route path="/signup" element={<SignUp loading={loading} />} />
					<Route path="/profile" element={isAuthenticated?<Profile />:<Login />} />
					<Route path="/contactus" element={<ContactUs />} />
					<Route path="/about" element={<About />} />
					<Route path="/single/product/Details" element={<SingleProductDetails />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/wishlist" element={<Wishlist />} />
					<Route path="/checkout" element={isAuthenticated?<CheckoutOrder />:<Login />} />
					<Route path="/placeorder" element={isAuthenticated?<PlaceOrder />:<Login />} />
					<Route path="/shop" element={<Shop />} />

					<Route path="/forgetpassword" element={<ForgetPassword />} />
					<Route path="/api/v1/user/reset/password/:token" element={<ResetPassword />} />



					{/* admin routes api/v1/user/reset/password/ */}
					<Route path="/admin/daskboard" element={<Daskboard />} />
					<Route path="/admin/creatproduct" element={<CreateProducts />} />
					<Route path="/admin/adminproducts" element={<AdminProducts />} />
					<Route path="/admin/user" element={<User />} /> 

				</Routes>
				<Footer />
			</Suspense>
			<Toaster />
		</BrowserRouter>
	);
}

export default App;
