import { createSlice } from '@reduxjs/toolkit';


// export const getCategory = createAsyncThunk('category/getCategory', async (payload) => {
//     const response = await axios.get(`https://63566a79a2d1844a97742c99.mockapi.io/category/`)
//     return response.data
// });

const postSlice = createSlice(({
    name: 'post',
    initialState: {
        posts: [],
    },
    reducers: {
        addPost: (state, action) => {
            state.posts = action.payload;
        }
    }
}));

export const { addPost } = postSlice.actions;

export default postSlice.reducer;
