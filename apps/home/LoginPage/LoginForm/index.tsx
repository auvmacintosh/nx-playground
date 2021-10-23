import type { CSSProperties, ReactNode } from 'react';
import { ChangeEvent, useState } from 'react';
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
  const [credential, setCredential] = useState({ userName: '', password: '' });

  const login = async (event) => {
    event.preventDefault();
    const url = `https://www.abc.com`;
    const headers = {
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify(credential);
    try {
      const response = await fetch(url, { method: 'POST', headers, body });
      if (response.ok) {
        return await response.json();
      }
    } catch (e) {
      throw 'error';
    }
  };

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setCredential({ ...credential, [name]: value });
  };

  return (
    <form className={style.form} onSubmit={login}>
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
