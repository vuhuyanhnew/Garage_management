/* eslint-disable no-useless-catch */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../services/axios.sevrice"
axiosInstance.defaults.headers.common['Authorization'] = localStorage.getItem('accessToken') ?? '';
const initialState = {
 manageService: null,
 serviceByIdData: null,
 createServiceData: {
  name: 'string',
  description: 'string',
  minPrice: 0,
  maxPrice: 0,
}
}

export const fetchServices = createAsyncThunk('service/fetchServices', async (payload) => {
  try {
    const response = await axiosInstance.get('services', {
      params: payload
    });
    return response.data.data; 
  } catch (error) {
    throw error; 
  }
});
export const fetchServicesById = createAsyncThunk('service/fetchServicesById', async (payload) => {
  try {
    const response = await axiosInstance.get(`/services/${payload}`)
    return response.data.data; 
  } catch (error) {
    throw error; 
  }
});
export const createNewService = createAsyncThunk('service/createNewService', async (serviceData) => {
  try {
    const response = await axiosInstance.post('services', serviceData);
    return response.data.data;
  } catch (error) {
    throw error;
  }
});
export const updateService = createAsyncThunk('service/updateService', async ({ id, data }) => {
  try {
    const response = await axiosInstance.put(`/services/${id}`, data);
    return response.data.data;
  } catch (error) {
    throw error;
  }
});


const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    

  },
  extraReducers: (builder) => {
    builder.addCase(fetchServices.fulfilled, (state, action) => {
      state.manageService = action.payload;
    });
    builder.addCase(fetchServicesById.fulfilled, (state, action) => {
      state.serviceByIdData = action.payload;
    });
  },
})
const serviceReducer = serviceSlice.reducer
export default serviceReducer