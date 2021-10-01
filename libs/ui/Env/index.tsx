/* eslint-disable-next-line */
export interface Props {}

export function Env(props: Props) {
  return (
    <div>
      <h1>Welcome to {process.env.NEXT_PUBLIC_ENVIRONMENT}! haha</h1>
    </div>
  )
}

export default Env
