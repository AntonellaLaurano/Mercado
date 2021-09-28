import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import { users } from '../redux/actions/user'
import AuthRouter from './AuthRouter'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'
import { loadData } from '../helpers/loadData'
import { currenDate } from '../helpers/currentDate'
import { detailsUser, refreshToken } from '../redux/actions/auth'
import Developer from '../views/Developer/Developer'
import Administrator from '../views/Administrator/Administrator'
import Owner from '../views/Owner/Owner'
import Customer from '../views/Customer/Customer.jsx'
import Delivery from '../views/Delivery/Delivery'


const AppRouter = () => {
    const dispatch = useDispatch();
    
    const { log, access, expired, role } = useSelector(state => state.auth);
    //dispatch(logout())
    //dispatch(clean())

    useEffect(() => {
        if(access) {
            const today = currenDate();
            if (today > expired) {
                dispatch(refreshToken(access));
            }
            const data = async () => {
                const res = await loadData(access);
                dispatch(detailsUser(access));
                dispatch(users(res));
            }
            data();
        }
    }, [access, dispatch, expired]);

    return (
        <Router>
            <Switch>
                <PublicRouter path='/login' log={log} role={role} component={AuthRouter} />
                <PrivateRouter exact path='/desarrollador/' log={log} component={Developer} />
                <PrivateRouter exact path='/administrador/' log={log} component={Administrator} />
                <PrivateRouter exact path='/propietario/' log={log} component={Owner} />
                <PrivateRouter exact path='/cliente/' log={log} component={Customer} />
                <PrivateRouter exact path='/delivery/' log={log} component={Delivery} />
                <Redirect path='/**' to='/login'/>
            </Switch>
        </Router>
    )
}

export default AppRouter
