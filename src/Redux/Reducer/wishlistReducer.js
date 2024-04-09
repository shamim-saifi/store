import { createReducer } from '@reduxjs/toolkit';

export const wishlistReducer = createReducer(
	{ wishlistItems: [] },
	{
		ADD_TO_wishlist_Request: state => {
			state.loading = true;
		},
		ADD_TO_wishlist_Success: (state, action) => {
			state.loading = false;
			const item = action.payload;

			const isItemExist = state.wishlistItems.find(i => i.product === item.product);
			if (isItemExist) {
				state.wishlistItems = state.wishlistItems.map(i =>
					i.product === isItemExist.product ? item : i
				);
			} else {
				state.wishlistItems.push(item);
			}

			
			localStorage.setItem('wishlistItems', JSON.stringify(state.wishlistItems));
			state.message = action.payload.message;
		},
		ADD_TO_wishlist_Fail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},

		REMOVE_wishlist_ITEM_Request: state => {
			state.loading = true;
		},
		REMOVE_wishlist_ITEM_Success: (state, action) => {
			state.loading = false;
			state.wishlistItems = state.wishlistItems.filter((i) => i.product !== action.payload);
			localStorage.setItem('wishlistItems', JSON.stringify(state.wishlistItems));

			state.message = action.payload.message;
		},
		REMOVE_wishlist_ITEM_Fail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	}
);
