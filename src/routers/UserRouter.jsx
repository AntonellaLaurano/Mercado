import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import Developer from '../views/Developer/Developer';

const UserRouter = ({...resto}) => {
    console.log(resto)
    const location = useLocation();
    console.log('hash')
    console.log(location.hash)
    return (
        <Switch>
            <Route exact path={`${location.pathname}`} component={Developer}/>
            <Route path={`${location.pathname}#perfil`}/>
        </Switch>
    )
}

export default UserRouter
