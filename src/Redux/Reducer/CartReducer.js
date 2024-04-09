import { createReducer } from '@reduxjs/toolkit';

export const CartReducer = createReducer(
	{ cartItems: [], shippingInfo: {} },
	{
		ADD_TO_CART_Request: state => {
			state.loading = true;
		},
		ADD_TO_CART_Success: (state, action) => {
			state.loading = false;
			const item = action.payload;

			const isItemExist = state.cartItems.find(i => i.product === item.product);
			if (isItemExist) {
				state.cartItems = state.cartItems.map(i =>
					i.product === isItemExist.product ? item : i
				);
			} else {
				state.cartItems.push(item);
			}

			
			 localStorage.setItem('cartItems', JSON.stringify(state.cartItems)); 
			state.message = action.payload.message;
		},
		ADD_TO_CART_Fail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},

		REMOVE_CART_ITEM_Request: state => {
			state.loading = true;
		},
		REMOVE_CART_ITEM_Success: (state, action) => {
			state.loading = false;
			state.cartItems = state.cartItems.filter((i) => i.product !== action.payload);
			localStorage.setItem('cartItems', JSON.stringify(state.cartItems));

			state.message = action.payload.message;
		},
		REMOVE_CART_ITEM_Fail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	}
);
