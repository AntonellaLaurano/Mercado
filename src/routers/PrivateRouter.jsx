import React from 'react'
import { Redirect, Route} from 'react-router-dom'

const PrivateRouter = ({ log, component: Component, ...resto }) => {
    return (
        <Route {...resto}
            component={(props) => 
                log ? <Component {...props} /> : <Redirect to='/login'/>
            } 
        />
    )
}

export default PrivateRouter
