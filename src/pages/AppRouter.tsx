import { Route, Switch, Redirect, useLocation } from 'react-router-dom'

import { AllRoutes, privateRoutes, publicRoutes } from '../constants/router'
import { useAuth } from '../hooks/useAuth'

export const AppRouter = () => {
  const { isAuth } = useAuth()
  const location = useLocation()

  const getRedirectPage = () => {
    const isPrivateRoute = privateRoutes.findIndex(({ path }) => path === location.pathname) > -1
    return isPrivateRoute ? AllRoutes.LOGIN : AllRoutes.INDEX
  }

  return (
    <>
      <Switch>
        {isAuth &&
          privateRoutes.map(({ path, component }) => (
            <Route key={path} path={path} component={component} exact />
          ))}
        {publicRoutes.map(({ path, component }) => (
          <Route key={path} path={path} component={component} exact />
        ))}
        <Redirect to={getRedirectPage()} />
      </Switch>
    </>
  )
}
