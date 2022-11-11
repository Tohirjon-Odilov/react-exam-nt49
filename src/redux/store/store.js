import { configureStore } from '@reduxjs/toolkit';
import categorySlice from '../features/categorySlice';
import postSlice from '../features/postSlice';

export default configureStore({
    reducer: {
        category: categorySlice,
        post: postSlice,
    }
});
