import axios from 'axios';
import { server } from '../../index';
import toast from 'react-hot-toast';
 
export const addItemsToWishlist = (id,quantity) => async (dispatch, getState) => {
	try {
		dispatch({ type: 'ADD_TO_wishlist_Request' });

		const { data } = await axios.get(`${server}/product/singal/${id}`, {
			headers: {
				'Content-Type': 'application/json',
			},
			withCredentials: true,
		});
		const { _id, name, price, productImages, stock } = data.product;
        const wishlistItem = {
            product: _id,
            name,
            price,
            image: productImages.image1.url,
            stock,
            quantity,
        };

		dispatch({
			type: 'ADD_TO_wishlist_Success',
			payload: wishlistItem,
		});

		 // Get current wishlist items from state
		//  const { wishlistItems } = getState().wishlist;
		 
		 // Combine current wishlist items with the newly added item
		//  const updatedwishlistItems = [...wishlistItems, wishlistItem];

		   // Store updated wishlist items in local storage
		// localStorage.setItem('wishlistItems', JSON.stringify(updatedwishlistItems));


		// localStorage.setItem(
		// 	'wishlistItems',
		// 	JSON.stringify(getState().wishlist.wishlistItems)
		// );
		// localStorage.setItem(
		// 	'wishlistItems',
		// 	JSON.stringify(data.product)
		// );

		toast.success('Added to Wishlist');
	} catch (error) {
		dispatch({
			type: 'ADD_TO_wishlist_Fail',
			payload: error.message,
		});
		toast.error(error.message);
	}
};


export const removeItemsFromWishlist= (id) => async (dispatch, getState) => {

	dispatch({
	  type: 'REMOVE_wishlist_ITEM_Success',
	  payload: id,
	});
	toast.success('Remove from Wishlist');
  
  };
  
