import axios from 'axios';
import { server } from '../../index'; 
import toast from 'react-hot-toast'; 

export const AdminLoadAllUser = () => async dispatch => {
	try {
		dispatch({ type: 'LoadAllProductRequest' });

		const { data } = await axios.get(`${server}/product/all`, {
			headers: {
				'Content-Type': 'application/json',
			},
			withCredentials: true,
		});

		dispatch({
			type: 'LoadAllProductSuccess',
			payload: data.product,
		});
		toast.success(data.message);
	} catch (error) {
		dispatch({
			type: 'LoadAllProductFail',
			payload: error,
		});
		// toast.error(error.message);
	}
};

export const LoadAllProducts = () => async dispatch => {
	try {
		dispatch({ type: 'LoadAllProductRequest' });

		const { data } = await axios.get(`${server}/product/all`, {
			headers: {
				'Content-Type': 'application/json',
			},
			withCredentials: true,
		});

		dispatch({
			type: 'LoadAllProductSuccess',
			payload: data.product,
		});
		// toast.success(data.message);
	} catch (error) {
		dispatch({
			type: 'LoadAllProductFail',
			payload: error.message,
		});
		// toast.error(error.message);
	}
};

export const SearchProducts = (key) => async dispatch => {
	try {
		dispatch({ type: 'SearchProductRequest' });

		const { data } = await axios.get(`${server}/product/search/${key}`, {
			headers: {
				'Content-Type': 'application/json',
			},
			withCredentials: true,
		});

		dispatch({
			type: 'SearchProductSuccess',
			payload: data.product,
		});
		// toast.success(data.message);
	} catch (error) {
		dispatch({
			type: 'SearchProductFail',
			payload: error,
		});
		// toast.error(error.message);
	}
};

export const ProductsPriceLowToHigh = () => async dispatch => {
	try {
		dispatch({ type: 'PriceLowToHighRequest' });

		const { data } = await axios.get(`${server}/product/lowtohigh`, {
			headers: {
				'Content-Type': 'application/json',
			},
			withCredentials: true,
		});

		dispatch({
			type: 'PriceLowToHighSuccess',
			payload: data.product,
		});
		// toast.success(data.message);
	} catch (error) {
		dispatch({
			type: 'PriceLowToHighFail',
			payload: error.message,
		});
		// toast.error(error.message);
	}
};

export const ProductsPriceHighToLow = () => async dispatch => {
	try {
		dispatch({ type: 'PriceHighToLowRequest' });

		const { data } = await axios.get(`${server}/product/hightolow`, {
			headers: {
				'Content-Type': 'application/json',
			},
			withCredentials: true,
		});

		dispatch({
			type: 'PriceHighToLowSuccess',
			payload: data.product,
		});
		// toast.success(data.message);
	} catch (error) {
		dispatch({
			type: 'PriceHighToLowFail',
			payload: error.message,
		});
		// toast.error(error.message);
	}
};

export const ProductsByPriceAndCategory = (category,price) => async dispatch => {
	try {
		dispatch({ type: 'SortByPriceAndCategoryRequest' });

		const { data } = await axios.get(`${server}/product/price/and/category?category=${category}&price=${price}`, {
			headers: {
				'Content-Type': 'application/json',
			},
			withCredentials: true,
		});

		dispatch({
			type: 'SortByPriceAndCategorySuccess',
			payload: data.product,
		});
		// toast.success(data.message);
	} catch (error) {
		dispatch({
			type: 'SortByPriceAndCategoryFail',
			payload: error.message
		});
		// toast.error(error.message);
	}
};

export const GetSignleProductsDetails = (id) => async dispatch => {
	try {
		dispatch({ type: 'SingleProductRequest' });

		const { data } = await axios.get(`${server}/product/singal/${id}`, {
			headers: {
				'Content-Type': 'application/json',
			},
			withCredentials: true,
		});

		dispatch({
			type: 'SingleProductSuccess',
			payload: data.product,
		});
		// toast.success(data.message);
	} catch (error) {
		dispatch({
			type: 'SingleProductFail',
			payload: error,
		});
		// toast.error(error.message);
	}
};

export const CreateProductReview =	(productId, comment, rating) => async dispatch => {
	try {
		dispatch({ type: 'CreateProductReviewRequest' });

		const { data } = await axios.put(
			`${server}/product/create/review`,
			{ productId, comment, rating},
			{
				headers: {
					'Content-Type': 'application/json',
				},
				withCredentials: true,
			}
		);
		console.log(data)
		dispatch({
			type: 'CreateProductReviewSuccess',
			payload: data.product
		});
		toast.success(data.message);
	} catch (error) {
		dispatch({
			type: 'CreateProductReviewFail',
			payload: error.message,
		});
		toast.error(error.message);
	}
};

export const LoadAllProductReviews = (id) => async dispatch => {
	try {
		dispatch({ type: 'GetProductReviewsRequest' });

		const { data } = await axios.get(`${server}/product/getall/review/${id}`, {
			headers: {
				'Content-Type': 'application/json',
			},
			withCredentials: true,
		});

		dispatch({
			type: 'GetProductReviewsSuccess',
			payload: data,
		});
		// toast.success(data.message);
	} catch (error) {
		dispatch({
			type: 'GetProductReviewsFail',
			payload: error,
		});
		// toast.error(error.message);
	}
};


export const AdminCreateProduct =	(name, description, category, price, stock,productImages) => async dispatch => {
	try {
		dispatch({ type: 'createProductRequest' });

		const { data } = await axios.post(
			`${server}/product/create/new/product`,
			{ name, description, category, price, stock ,productImages},
			{
				headers: {
					'Content-Type': 'application/json',
				},
				withCredentials: true,
			}
		);

		dispatch({
			type: 'createProductSuccess',
			payload: data.product,
		});
		toast.success(data.message);
	} catch (error) {
		dispatch({
			type: 'createProductFail',
			payload: error.message,
		});
		toast.error(error.message);
	}
};


export const AdminDeleteProduct =	(id) => async dispatch => {
	try {
		dispatch({ type: 'AdminDeleteProductRequest' });

		const { data } = await axios.delete(
			`${server}/product/delete/${id}`,
			{
				headers: {
					'Content-Type': 'application/json',
				},
				withCredentials: true,
			}
		);

		dispatch({
			type: 'AdminDeleteProductSuccess',
			payload: data,
		});
		toast.success(data.message);
	} catch (error) {
		dispatch({
			type: 'AdminDeleteProductFail',
			payload: error.message,
		});
		toast.error(error.message);
	}
};

