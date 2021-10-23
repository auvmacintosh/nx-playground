import { PostEntity } from './_types';

export async function getPost(id: string): Promise<PostEntity> {
  const url = `${process.env.NEXT_PUBLIC_API_URL_PREFIX}/post/${id}`;
  const response = await fetch(url);

  return await response.json();
}
