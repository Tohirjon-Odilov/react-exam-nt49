import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getCategory = createAsyncThunk('category/getCategory', async (payload) => {
    const response = await axios.get(`https://63566a79a2d1844a97742c99.mockapi.io/category/`)
    return response.data
});

const categorySlice = createSlice(({
    name: 'category',
    initialState: {
        category: [],
        status: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategory.pending, (state, action) => {
                state.status = 'panding';
            })
            .addCase(getCategory.fulfilled, (state, action) => {
                state.status = 'success';
                state.category = action.payload;
            })
            .addCase(getCategory.rejected, (state, action) => {
                state.status = 'failed';
            })
    }
}));


export default categorySlice.reducer;
