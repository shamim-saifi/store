import { createReducer } from '@reduxjs/toolkit';

export const OrderReducer = createReducer(
	{},
	{

		CreateOrderRequest: state => {
			state.loading = true;
		},
		CreateOrderSuccess: (state, action) => { 
			state.loading = false;
			state.order = action.payload;
			state.message = action.payload.message;
		},
		CreateOrderFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},

		SingleOrderDetailsRequest: state => {
			state.loading = true;
		},
		SingleOrderDetailsSuccess: (state, action) => { 
			state.loading = false;
			state.order = action.payload;
			state.message = action.payload.message;
		},
		SingleOrderDetailsFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},

		AllUserOrderRequest: state => {
			state.loading = true;
		},
		AllUserOrderSuccess: (state, action) => { 
			state.loading = false;
			state.order = action.payload;
			state.message = action.payload.message;
		},
		AllUserOrderFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},


		AdminAllOrderRequest: state => {
			state.loading = true;
		},
		AdminAllOrderSuccess: (state, action) => { 
			state.loading = false;
			state.adminOrder = action.payload;
			state.message = action.payload.message;
		},
		AdminAllOrderFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},

		AdminDeleteOrderRequest: state => {
			state.loading = true;
		},
		AdminDeleteOrderSuccess: (state, action) => { 
			state.loading = false;
			state.message = action.payload.message;
		},
		AdminDeleteOrderFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},

		AdminUpdateOrderStatusRequest: state => {
			state.loading = true;
		},
		AdminUpdateOrderStatusSuccess: (state, action) => { 
			state.loading = false;
			state.order = action.payload;
			state.message = action.payload.message;
		},
		AdminUpdateOrderStatusFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},



	}
);
