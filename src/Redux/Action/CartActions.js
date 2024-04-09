import axios from 'axios';
import { server } from '../../index';
import toast from 'react-hot-toast';
 
export const addItemsToCart = (id,quantity) => async (dispatch, getState) => {
	try {
		dispatch({ type: 'ADD_TO_CART_Request' });

		const { data } = await axios.get(`${server}/product/singal/${id}`, {
			headers: {
				'Content-Type': 'application/json',
			},
			withCredentials: true,
		});
		const { _id, name, price, productImages, stock } = data.product;
        const cartItem = {
            product: _id,
            name,
            price,
            image: productImages.image1.url,
            stock,
            quantity,
        };

		dispatch({
			type: 'ADD_TO_CART_Success',
			payload: cartItem,
		});

		 // Get current cart items from state
		//  const { cartItems } = getState().cart;
		 
		 // Combine current cart items with the newly added item
		//  const updatedCartItems = [...cartItems, cartItem];

		   // Store updated cart items in local storage
		// localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));


		// localStorage.setItem(
		// 	'cartItems',
		// 	JSON.stringify(getState().cart.cartItems)
		// );
		// localStorage.setItem(
		// 	'cartItems',
		// 	JSON.stringify(data.product)
		// );

		toast.success('Added to Cart');

	} catch (error) {
		dispatch({
			type: 'ADD_TO_CART_Fail',
			payload: error.message,
		});
		toast.error(error.message);
	}
};


export const removeItemsFromCart = (id) => async (dispatch, getState) => {

	dispatch({
	  type: 'REMOVE_CART_ITEM_Success',
	  payload: id,
	});
	toast.success('Remove from Cart');
	
  };
  
