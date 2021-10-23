import { useEffect, useState } from 'react';
import { getPost } from '../../_apis/get-post';
import type { PostEntity } from '../../_apis/get-post/_types';

export function usePost(id: string): PostEntity {
  const [post, setPost] = useState({
    'userId': 0,
    'id': 0,
    'body': '',
    title: ''
  });

  useEffect(() => {
    ;(async () => {
      const json = await getPost(id);
      setPost(json);
    })();
  }, [id]);

  return post;
}