import ContentLoader, { Facebook } from 'react-content-loader';
import Link from 'next/link';
import style from './common.module.css';
import { Env } from '@nx-playground/ui';
import { getPost } from '../../apis/get-post';
import { useQuery } from 'react-query';

const PostLoader = () => (
  <ContentLoader
    style={{ width: '100%', display: 'flex' }}
    backgroundColor={'green'}
    foregroundColor={'red'}
  >
    <rect rx="4" ry="4" width="100%" height="30" />
  </ContentLoader>
);

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
