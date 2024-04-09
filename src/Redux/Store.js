import { configureStore } from '@reduxjs/toolkit';
import { UserReducer } from './Reducer/UserReducer';
import { ProductReducer } from './Reducer/ProductReducer';
import { CartReducer } from './Reducer/CartReducer'; 
import { wishlistReducer } from './Reducer/wishlistReducer';
import { OrderReducer } from './Reducer/OrderReducer';

// Load cart items and shipping info from local storage
const cartItemsFromLocalStorage = localStorage.getItem('cartItems');
const usercartItems=JSON.parse(cartItemsFromLocalStorage)
const shippingInfoFromLocalStorage = localStorage.getItem('shippingInfo');


// let initialState = {
// 	cart: {
//         cartItems: cartItemsFromLocalStorage ? JSON.parse(cartItemsFromLocalStorage) : [],
//         shippingInfo: shippingInfoFromLocalStorage ? JSON.parse(shippingInfoFromLocalStorage) : {},
//     },

// };

// let initialState = {
// 	cart: {
// 		cartItems: localStorage.getItem('cartItems')
// 			? JSON.parse(localStorage.getItem('cartItems'))
// 			: [],
// 		shippingInfo: localStorage.getItem('shippingInfo')
// 			? JSON.parse(localStorage.getItem('shippingInfo'))
// 			: {},
// 	},
// };


const Store = configureStore({
	reducer: {
		userContainer: UserReducer,
		productContainer: ProductReducer,
    	cartContainer:CartReducer,
    	wishlistContainer:wishlistReducer,
    	orderContainer:OrderReducer,
	},
	// preloadedState: initialState,
});

export default Store;
