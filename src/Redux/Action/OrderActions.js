import axios from 'axios';
import { server } from '../../index';
import toast from 'react-hot-toast';




export const CreateOrder =(	orderProduct,shippingDetails,shippingPrice,taxPrice,itemsPrice,totalPrice) =>
	async dispatch => {
		try {
			dispatch({ type: 'CreateOrderRequest' });

			const { data } = await axios.post(
				`${server}/order/create/new`,
				{
					orderProduct,shippingDetails,shippingPrice,taxPrice,itemsPrice,totalPrice
				},
				{
					headers: {
						'Content-Type': 'application/json',
					},
					withCredentials: true,
				}
			);
			dispatch({
				type: 'CreateOrderSuccess',
				payload: data.order,
			});
			toast.success(data.message);
		} catch (error) {
			dispatch({
				type: 'CreateOrderFail',
				payload: error.message,
			});
			toast.error(error.message);
		}
};

export const GetSingleOrderDetails =(id) =>	async dispatch => {
	try {
		dispatch({ type: 'SingleOrderDetailsRequest' });
		const { data } = await axios.get(
			`${server}/order/single/${id}`,				
			{
				headers: {
					'Content-Type': 'application/json',
				},
				withCredentials: true,
			}
		);
		dispatch({
			type: 'SingleOrderDetailsSuccess',
			payload: data.order,
		});
		toast.success(data.message);
	} catch (error) {
		dispatch({
			type: 'SingleOrderDetailsFail',
			payload: error.message,
		});
		toast.error(error.message);
	}
};

export const GetAllUserOrder =() =>	async dispatch => {
	try {
		dispatch({ type: 'SingleOrderDetailsRequest' });
		const { data } = await axios.get(
			`${server}/order/getmyorder`,				
			{
				headers: {
					'Content-Type': 'application/json',
				},
				withCredentials: true,
			}
		);
		dispatch({
			type: 'SingleOrderDetailsSuccess',
			payload: data.order,
		});
		// toast.success(data.message);
	} catch (error) {
		dispatch({
			type: 'SingleOrderDetailsFail',
			payload: error.message,
		});
		// toast.error(error.message);
	}
};


//admin action for orders
export const AdminGetAllOrders =() =>	async dispatch => {
	try {
		dispatch({ type: 'AdminAllOrderRequest' });
		const { data } = await axios.get(
			`${server}/order/admin/getallorder`,				
			{
				headers: {
					'Content-Type': 'application/json',
				},
				withCredentials: true,
			}
		);
		dispatch({
			type: 'AdminAllOrderSuccess',
			payload: data.order,
		});
		// toast.success(data.message);
	} catch (error) {
		dispatch({
			type: 'AdminAllOrderFail',
			payload: error.message,
		});
		// toast.error(error.message);
	}
};

export const AdminDeleteOrder =(id) =>	async dispatch => {
	try {
		dispatch({ type: 'AdminDeleteOrderRequest' });
		const { data } = await axios.delete(
			`${server}/order/admin/delete/${id}`,				
			{
				headers: {
					'Content-Type': 'application/json',
				},
				withCredentials: true,
			}
		);
		dispatch({
			type: 'AdminDeleteOrderSuccess',
			payload: data,
		});
		toast.success(data.message);
	} catch (error) {
		dispatch({
			type: 'AdminDeleteOrderFail',
			payload: error.message,
		});
		toast.error(error.message);
	}
};

export const AdminUpdateOrderStatus =(id,status) =>	async dispatch => {
	try {
		dispatch({ type: 'AdminUpdateOrderStatusRequest' });
		const { data } = await axios.put(
			`${server}/order/admin/update/${id}`,	
			{
				status
			},		
			{
				headers: {
					'Content-Type': 'application/json',
				},
				withCredentials: true,
			}
		);
		dispatch({
			type: 'AdminUpdateOrderStatusSuccess',
			payload: data.order,
		});
		toast.success(data.message);
	} catch (error) {
		dispatch({
			type: 'AdminUpdateOrderStatusFail',
			payload: error.message,
		});
		toast.error(error.message);
	}
};

