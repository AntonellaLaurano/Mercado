import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { users } from '../actions/user';
import App from '../views/App';
import AuthRouter from './AuthRouter';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import { loadData } from '../helpers/loadData';
import { detailsUser} from '../actions/auth';

const AppRouter = () => {
    const dispatch = useDispatch();
    
    const [log, setLog] = useState(false);

    const access = useSelector((state) => state.auth.access);

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
    }, [access, dispatch])

    return (
        <Router>
            <Switch>
                <PublicRouter path="/login" log={log} component={AuthRouter} />
                <PrivateRouter exact path="/app" log={log} component={App} />
            </Switch>
        </Router>
    )
}

export default AppRouter
