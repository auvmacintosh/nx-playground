// Input
export type Credential = { userName: string, password: string }

// Output
export type LoginEntity = { message: string, token: string, userInfo: string, expiresAt: string }

export async function login(credential: Credential): Promise<LoginEntity> {
  const url = `${process.env.NEXT_PUBLIC_API_URL_PREFIX}/login`;
  const headers = {
    'Content-Type': 'application/json'
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
}