import { configureStore } from '@reduxjs/toolkit';
import listReducer from './reducer/listReducer';
export default configureStore({
  reducer: {
    listReducer: listReducer,
  },
});
