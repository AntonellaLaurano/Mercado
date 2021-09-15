import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom"
import { users } from '../redux/actions/user'
import Developer from '../views/Developer/Developer'
import AuthRouter from './AuthRouter'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'
import { loadData } from '../helpers/loadData'
import { detailsUser} from '../redux/actions/auth'
import UserRouter from './UserRouter'

const AppRouter = () => {
    const dispatch = useDispatch();
    
    const [log, setLog] = useState(false);

    const access = useSelector(state => state.auth.access);
    const role = useSelector(state => state.auth.role);

    useEffect(() => {
        if(access) {
            setLog(true);
            const data = async () => {
                const res = await loadData(access);
                dispatch(detailsUser(access));
                dispatch(users(res));
            }
            data();
        } else {
            setLog(false);
        }   
    }, [access, dispatch]);

    return (
        <Router>
            <Switch>
                <PublicRouter path='/login' log={log} role={role} component={AuthRouter} />
                <PrivateRouter exact path='/desarrollador/' log={log} component={UserRouter} />
                <PrivateRouter exact path='/desarrollador/:seccion' log={log} component={Developer} />
                <Redirect path='/**' to='/login'/>
            </Switch>
        </Router>
    )
}

export default AppRouter
