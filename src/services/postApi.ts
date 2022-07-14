import HttpRequest from '@/utils/Http-request';

export interface ICO {
  id: string | number;
  title: string;
  body: string;
}
export const PostService = {
  GetPost: async () => {
    return await HttpRequest.get<ICO>(`https://jsonplaceholder.typicode.com/posts`);
  },
};
