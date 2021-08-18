import { Route, Switch, Redirect } from 'react-router-dom'
import { AllRoutes, privateRoutes, publicRoutes } from '../constants/router'

export const AppRouter = () => {
  const isAuth = false

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
        <Redirect to={AllRoutes.INDEX} />
      </Switch>
    </>
  )
}
