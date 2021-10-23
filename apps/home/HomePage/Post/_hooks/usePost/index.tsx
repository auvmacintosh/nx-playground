import type { PostEntity } from '../../_apis/getPost/_types';
import { getPost } from '../../_apis/getPost';
import { useEffect, useState } from 'react';

const initialPost = {
  userId: 0,
  id: 0,
  body: '',
  title: ''
};

export function usePost(id: string): PostEntity {
  const [post, setPost] = useState<PostEntity>(initialPost);

  useEffect(() => {
    getPost(id).then(setPost);
  }, [id]);

  return post;
}