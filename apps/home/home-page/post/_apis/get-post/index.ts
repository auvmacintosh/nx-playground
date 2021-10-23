import { PostEntity } from './_types';

export async function getPost (id:string): Promise<PostEntity> {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`
  const response = await fetch(url)

  return await response.json()
}
