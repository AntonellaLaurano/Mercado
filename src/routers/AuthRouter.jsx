import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../views/Login'

const AuthRouter = () => {
    return (
        <Switch>
            <Route exact path='/login' component={Login} />
        </Switch>
    )
}

export default AuthRouter;
