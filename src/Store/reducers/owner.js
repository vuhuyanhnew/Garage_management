/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-catch */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../services/axios.sevrice"
axiosInstance.defaults.headers.common['Authorization'] = localStorage.getItem('accessToken') ?? '';
const initialState = {
 manageOwner: null,
 userByIdData: null,
}
export const fetchOwners = createAsyncThunk('owner/fetchOwners', async (payload) => {
  try {
    const response = await axiosInstance.get('users', {
      params: payload
    });
    return response.data.data; 
  } catch (error) {
    throw error; 
  }
});

export const fetchOwnersById = createAsyncThunk('owner/fetchOwnersById', async (payload) => {
  try {
    const response = await axiosInstance.get(`/users/${payload}`)
    return response.data.data; 
  } catch (error) {
    throw error; 
  }
});
export const createNewOwner = createAsyncThunk('owner/createNewOwner', async (payload) => {
    try {
      const response = await axiosInstance.post('/users', payload);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
export const updateOwner = createAsyncThunk('owner/updateOwner', async ({ id, data }) => {
  try {
    const response = await axiosInstance.put(`/users/${id}`, data);
    return response.data.data;
  } catch (error) {
    throw error;
  }
});
export const deleteOwner = createAsyncThunk('owner/deleteOwner', async (id) => {
    try {
      const response = await axiosInstance.delete(`/users/${id}`);
      return response.data; 
    } catch (error) {
      throw error.response.data
    }
  }
);

const ownerSlice = createSlice({
  name: 'owner',
  initialState,
  reducers: {
    

  },
  extraReducers: (builder) => {
    builder.addCase(fetchOwners.fulfilled, (state, action) => {
      state.manageOwner = action.payload;
    });
    
    builder.addCase(fetchOwnersById.fulfilled, (state, action) => {
      state.userByIdData = action.payload;
    });
    builder.addCase(updateOwner.fulfilled, (state, action) => {
      
    });
    builder.addCase(createNewOwner.fulfilled, (state, action) => {
        
      })
  },
})
const ownerReducer = ownerSlice.reducer
export default ownerReducer

