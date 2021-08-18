import { AboutPage } from '../pages/AboutPage'
import { DictionaryPage } from '../pages/DictionaryPage'
import { LoginPage } from '../pages/LoginPage'
import { MainPage } from '../pages/MainPage'

export enum AllRoutes {
  INDEX = '/',
  LOGIN = '/login',
  DICTIONARY = '/dictionary',
  ABOUT = '/about',
}

export const privateRoutes = [
  {
    path: AllRoutes.DICTIONARY,
    component: DictionaryPage,
  },
]
export const publicRoutes = [
  {
    path: AllRoutes.INDEX,
    component: MainPage,
  },
  {
    path: AllRoutes.LOGIN,
    component: LoginPage,
  },
  {
    path: AllRoutes.ABOUT,
    component: AboutPage,
  },
]
