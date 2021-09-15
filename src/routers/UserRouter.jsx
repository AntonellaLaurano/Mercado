import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import Developer from '../views/Developer/Developer';

const UserRouter = ({...resto}) => {
    const location = useLocation();
    return (
        <Switch>
            <Route exact path={`${location.pathname}`} component={Developer}/>
        </Switch>
    )
}

export default UserRouter
