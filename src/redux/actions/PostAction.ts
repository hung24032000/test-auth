import { PostService } from '@/services/postApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface PostAction {
  getPosts: string;
}
const PostActionData: PostAction = {
  getPosts: 'GET_POSTS',
};

export const GetPostAction = createAsyncThunk(PostActionData.getPosts, async () => {
  const res = await PostService.GetPost()
    .then((data) => data)
    .catch((errors) => JSON.parse(errors.response.request.response));
  return res;
});
