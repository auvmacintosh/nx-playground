import type { CSSProperties, ReactNode } from 'react';
import { ChangeEvent, useState } from 'react';
import { Credential, login } from './_apis/login';
import style from './common.module.css';

export type Variant = 'default';

export type Props = {
  children?: ReactNode;

  variant?: Variant;
  className?: string;
  style?: CSSProperties;
};

export function LoginForm({
  children,

  variant = 'default',
  className = style.defaultClassName,
  style: inlineStyle,
}: Props): JSX.Element {
  const [credential, setCredential] = useState<Credential>({ userName: '', password: '' });

  const submit = async (event) => {
    event.preventDefault();
    await login(credential)
  };

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setCredential({ ...credential, [name]: value });
  };

  return (
    <form className={style.form} onSubmit={submit}>
      <label>
        User Name:{' '}
        <input
          name="userName"
          type="text"
          value={credential.userName}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:{' '}
        <input
          name="password"
          type="password"
          value={credential.password}
          onChange={handleChange}
        />
      </label>
      <button>Login</button>
    </form>
  );
}
