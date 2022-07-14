import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '@/redux/slices/counterSlice';
import postReducer from '@/redux/slices/postSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    post: postReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
