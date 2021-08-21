import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '.'

export interface UserState {
  isAuth: boolean
}

const initialState: UserState = {
  isAuth: Boolean(localStorage.getItem('isAuth')),
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state) => {
      localStorage.setItem('isAuth', 'true')
      state.isAuth = true
    },
  },
})

export const { setUser } = userSlice.actions

export const selectUserInfo = createSelector(
  (state: RootState) => state.user,
  (user) => user,
)
export default userSlice.reducer
