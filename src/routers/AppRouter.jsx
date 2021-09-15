import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import { clean, users } from '../redux/actions/user'
import AuthRouter from './AuthRouter'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'
import { loadData } from '../helpers/loadData'
import { detailsUser, logout } from '../redux/actions/auth'
import UserRouter from './UserRouter'

const AppRouter = () => {
    const dispatch = useDispatch();
    
    const log = useSelector(state => state.auth.log);
    const access = useSelector(state => state.auth.access);
    const role = useSelector(state => state.auth.role);
    //dispatch(logout())
    //dispatch(clean())

    useEffect(() => {
        if(access) {
            const data = async () => {
                const res = await loadData(access);
                console.log(res)
                dispatch(detailsUser(access));
                dispatch(users(res));
            }
            data();
        }
    }, [access, dispatch]);

    return (
        <Router>
            <Switch>
                <PublicRouter path='/login' log={log} role={role} component={AuthRouter} />
                <PrivateRouter exact path='/desarrollador/' log={log} component={UserRouter} />
                <Redirect path='/**' to='/login'/>
            </Switch>
        </Router>
    )
}

export default AppRouter
