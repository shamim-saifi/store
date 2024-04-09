import { createReducer } from '@reduxjs/toolkit';

export const ProductReducer = createReducer(
	{},
	{
		createProductRequest: state => {
			state.loading = true;
		},
		createProductSuccess: (state, action) => {
			state.loading = false;
			state.product = action.payload;
			state.message = action.payload.message;
		},
		createProductFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},


		LoadAllProductRequest: state => {
			state.loading = true;
		},
		LoadAllProductSuccess: (state, action) => {
			state.loading = false;
			state.products = action.payload;
			state.message = action.payload.message;
		},
		LoadAllProductFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		



		SingleProductRequest: state => {
			state.loading = true;
		},
		SingleProductSuccess: (state, action) => {
			state.loading = false;
			state.SignleProduct = action.payload;
			state.message = action.payload.message;
		},
		SingleProductFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},


		CreateProductReviewRequest: state => {
			state.loading = true;
		},
		CreateProductReviewSuccess: (state, action) => { 
			state.loading = false;
			// state.ProductReviews = action.payload;
			state.message = action.payload.message;
		},
		CreateProductReviewFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},

		GetProductReviewsRequest: state => {
			state.loading = true;
		},
		GetProductReviewsSuccess: (state, action) => {
			state.loading = false;
			state.ProductReviews = action.payload;
			state.message = action.payload.message;
		},
		GetProductReviewsFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},


		AdminDeleteProductRequest: state => {
			state.loading = true;
		},
		AdminDeleteProductSuccess: (state, action) => {
			state.loading = false;
			state.message = action.payload.message;
		},
		AdminDeleteProductFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},







		// All Filter reducer
		SearchProductRequest: state => {
			state.loading = true;
		},
		SearchProductSuccess: (state, action) => {
			state.loading = false;
			state.products = action.payload;
			state.message = action.payload.message;
		},
		SearchProductFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},

		PriceLowToHighRequest: state => {
			state.loading = true;
		},
		PriceLowToHighSuccess: (state, action) => {
			state.loading = false;
			state.products = action.payload;
			state.message = action.payload.message;
		},
		PriceLowToHighFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},

		PriceHighToLowRequest: state => {
			state.loading = true;
		},
		PriceHighToLowSuccess: (state, action) => {
			state.loading = false;
			state.products = action.payload;
			state.message = action.payload.message;
		},
		PriceHighToLowFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},

		SortByPriceAndCategoryRequest: state => {
			state.loading = true;
		},
		SortByPriceAndCategorySuccess: (state, action) => {
			state.loading = false;
			state.products = action.payload;
			state.message = action.payload.message;
		},
		SortByPriceAndCategoryFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},

	}
);
