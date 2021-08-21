import { useCallback } from 'react'

type LogInProps = {
  username: string
  password: string
}

export const useAuth = () => {
  const logIn = useCallback(({ password, username }: LogInProps) => {
    if (username === 'admin' && password === '12345678') {
      localStorage.setItem('isAuth', 'true')
      return true
    }
    return false
  }, [])

  return { logIn }
}
