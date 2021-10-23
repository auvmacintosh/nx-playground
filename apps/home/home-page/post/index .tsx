import Link from 'next/link';
import style from './common.module.css';
import { Env } from '@nx-playground/ui';
import { getPost } from '../../apis/get-post';
import { QueryClient, useQuery } from 'react-query';

const PostLoader = () => <div>Loading...</div>

export function Post() {
  const path = 'posts';
  const id = '1';

  const { isLoading, data } = useQuery([path, id], getPost);

  return (
    <div className={style.div}>
      {data ? (
        <div>
          Post {id}:{' '}
          <Link href="/post">
            <a>{data?.title}</a>
          </Link>
        </div>
      ) : (
        <PostLoader />
      )}
      <Env />
    </div>
  );
}
