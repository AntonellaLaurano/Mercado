import React from 'react'
import { Redirect, Route, useLocation } from 'react-router-dom'

const PublicRouter = ({ log, role, component: Component, ...resto }) => {
    const location = useLocation()
    console.log('public')
    console.log(location)
    return (
        <Route {...resto}
            component={(props) => 
                log ? <Redirect to={`/${role}`} /> : <Component {...props} />
            } 
        />
    )
}

export default PublicRouter
