/* eslint-disable no-useless-catch */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../services/axios.sevrice"
axiosInstance.defaults.headers.common['Authorization'] = localStorage.getItem('accessToken') ?? '';
const initialState = {
 manageGarage: null,
 garageByIdData: null,
}

export const fetchGarage = createAsyncThunk('garage/fetchGarage', async (payload) => {
  try {
    const response = await axiosInstance.get('garages', {
      params: payload
    });
    return response.data.data; 
  } catch (error) {
    throw error; 
  }
});
export const fetchGarageById = createAsyncThunk('garage/fetchGarageById', async (payload) => {
  try {
    const response = await axiosInstance.get(`/services/${payload}`)
    return response.data.data; 
  } catch (error) {
    throw error; 
  }
});



const garageSlice = createSlice({
  name: 'garage',
  initialState,
  reducers: {
    

  },
  extraReducers: (builder) => {
    builder.addCase(fetchGarage.fulfilled, (state, action) => {
      state.manageService = action.payload;
    });
    builder.addCase(fetchGarageById.fulfilled, (state, action) => {
      state.serviceByIdData = action.payload;
    });
  },
})
const garageReducer = garageSlice.reducer
export default garageReducer