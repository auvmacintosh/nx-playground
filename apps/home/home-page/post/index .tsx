import Link from 'next/link';
import style from './common.module.css';
import { Env } from '@nx-playground/ui';
import { usePost } from './_hooks/use-post';

const PostLoader = () => <div>Loading...</div>;

export function Post() {
  const id = '1';

  const post = usePost(id)

  return (
    <div className={style.div}>
      {post.title ? (
        <div>
          Post {id}:{' '}
          <Link href='/post'>
            <a>{post.title}</a>
          </Link>
        </div>
      ) : (
        <PostLoader />
      )}
      <Env />
    </div>
  );
}
