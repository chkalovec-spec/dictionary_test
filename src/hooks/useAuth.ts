import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../store'
import { selectUserInfo, setUser } from '../store/userSlice'

type LogInProps = {
  username: string
  password: string
}

export const useAuth = () => {
  const dispatch = useAppDispatch()
  const { isAuth } = useAppSelector(selectUserInfo)

  const logIn = useCallback(
    ({ password, username }: LogInProps) => {
      if (username === 'admin' && password === '12345678') {
        dispatch(setUser())
        return true
      }
      return false
    },
    [dispatch],
  )

  return { logIn, isAuth }
}
