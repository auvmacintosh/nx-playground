import { Env } from '@nx-playground/ui';
import Link from 'next/link'
import style from './common.module.css'
import { getPost } from '../../apis/get-post'
import { useQuery, useQueryClient } from 'react-query'

export function Post() {
  const path = 'posts'
  const id = '1'

  const { isLoading, data } = useQuery([path, id], getPost)

  return (
    <div className={style.div}>
      Post {id}:{' '}
      <Link href="/post">
        <a>{data?.title}</a>
      </Link>
      <Env />
    </div>
  )
}
