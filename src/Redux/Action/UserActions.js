import axios from 'axios';
import {server} from '../../index'
import toast from 'react-hot-toast';



export const signup = (name, phone, email, password,avatar) => async dispatch => {
    try {
      dispatch({ type: 'signupRequest' });
  
      const { data } = await axios.post(
        `${server }/user/registration`,
        { name, phone, email, password, avatar },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
  
      dispatch({
        type: 'signupSuccess',
        payload: data.user,
      });
      toast.success(data.message); 
    } catch (error) {
      dispatch({
        type: 'signupFail',
        payload: error.message,
      });
      console.log(error)
      toast.error(error.message);
    }
};


export const LoginUser = (email, password) => async dispatch => {
    try {
      dispatch({ type: 'loginRequest' });
  
      const { data } = await axios.post(
        `${server }/user/login`,
        {  email, password  },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
  
      dispatch({
        type: 'loginSuccess',
        payload: data.user,
      });
      toast.success(data.message); 
    } catch (error) {
      dispatch({
        type: 'loginFail',
        payload: error.response.data.message
        
      });
      toast.error(error.response.data.message);
    }
};

export const LogoutUser = () => async dispatch => {
    try {
      dispatch({ type: 'logoutRequest' });
  
      const { data } = await axios.get(
        `${server }/user/logout`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
  
      dispatch({
        type: 'logoutSuccess',
        payload: data,
      });
      toast.success(data.message); 
    } catch (error) {
      dispatch({
        type: 'logoutFail',
        payload: error.message,
      });
      toast.error(error.message);
    }
};


export const LoadUser = () => async dispatch => {
  try {
    dispatch({ type: 'loadUserRequest' });

    const { data } = await axios.get(
      `${server }/user/me`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      } 
    );

    dispatch({
      type: 'loadUserSuccess',
      payload: data.user,
    });
    // toast.success(data.message); 
  } catch (error) {
    dispatch({
      type: 'loadUserFail',
      payload: error.message,
    });
    // toast.error(error.message); 
  }
};

export const ChangeAvatarUser = (avatar) => async dispatch => {
  try {
    dispatch({ type: 'changeUserAvatarRequest' });

    const { data } = await axios.post(
      `${server }/user/change/avatar`,
      {avatar},
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: 'changeUserAvatarSuccess',
      payload: data,
    });
    toast.success(data.message); 
  } catch (error) {
    dispatch({
      type: 'changeUserAvatarFail',
      payload: error.message,
    });
    toast.error(error.message);
  }
};


export const UpdateUserDetails = (name, phone, email,address) => async dispatch => {
  try {
    dispatch({ type: 'updateUserDetailsRequest' });

    const { data } = await axios.put(
      `${server }/user/update`,
      {name, phone, email,address},
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: 'updateUserDetailsSuccess',
      payload: data.user,
    });
    toast.success(data.message); 
  } catch (error) {
    dispatch({
      type: 'updateUserDetailsFail',
      payload: error.message,
    });
    toast.error(error.message);
  }
};

export const AdminLoadAllUser = () => async dispatch => {
  try {
    dispatch({ type: 'AdminLoadUserRequest' });

    const { data } = await axios.get(
      `${server }/user/getalluser`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: 'AdminLoadUserSuccess',
      payload: data.user,
    });
    toast.success(data.message); 
  } catch (error) {
    dispatch({
      type: 'AdminLoadUserFail',
      payload: error.message,
    });
    // toast.error(error.message);
  }
};

export const AdminDeleteUser = (id) => async dispatch => {
  try {
    dispatch({ type: 'AdminDeleteUserRequest' });

    const { data } = await axios.delete(
      `${server }/user/delete/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: 'AdminDeleteUserSuccess',
      payload: data
    });
    toast.success(data.message); 
  } catch (error) {
    dispatch({
      type: 'AdminDeleteUserFail',
      payload: error.message,
    });
    toast.error(error.message);
  }
};

export const AdminChangeUserRole = (id,role) => async dispatch => {
  try {
    dispatch({ type: 'AdminChangeUserRoleRequest' });

    const { data } = await axios.put(
      `${server }/user/change/role`,
      {id,role},
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: 'AdminChangeUserRoleSuccess',
      payload: data
    });
    toast.success(data.message); 
  } catch (error) {
    dispatch({
      type: 'AdminChangeUserRoleFail',
      payload: error.message,
    });
    toast.error(error.message);
  }
};

