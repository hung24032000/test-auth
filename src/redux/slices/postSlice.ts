import { RootState } from '@/store/store';
import { createSlice } from '@reduxjs/toolkit';
import { GetPostAction } from '../actions/PostAction';

export interface CounterState {
  value: Array<object>;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  value: [],
  status: 'idle',
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    getPostALL: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetPostAction.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(GetPostAction.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(GetPostAction.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { getPostALL } = postSlice.actions;

export const selectPost = (state: RootState) => state.post.value;
export default postSlice.reducer;
