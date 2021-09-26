import { PostEntity } from './_types';

export async function getPost ({queryKey: [path, id]}): Promise<PostEntity> {
  const url = `https://jsonplaceholder.typicode.com/${path}/${id}`
  const response = await fetch(url)
  const json = await response.json()

  // MUST throw the error instead of reject promise

  return json
}
