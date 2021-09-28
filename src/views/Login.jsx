import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginEmail } from '../redux/actions/auth'
import PasswordVisibility from '../components/PasswordVisibilty'

import '../css/login.css';

const Login = () => {

    const dispatch = useDispatch();

    const [dataLogin, setDataLogin] = useState({
        email: '',
        password: ''
    })

    const { email, password } = dataLogin;

    const handleChange = (e) => {
        const value = e.target.value;
        setDataLogin({
            ...dataLogin,
            [e.target.name]: value
        })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginEmail(dataLogin));
    }

    return (
        <div className='login'>
            <div className='row container loginForm z-depth-2 hoverable'>
                <form className='col s12' onSubmit={handleLogin}>
                    <div className='row'>
                        <div className='input-field col s12'>
                            <i className='material-icons prefix'>mail</i>
                            <input onChange={handleChange} value={email} name='email' id='email' type='email' className='validate' required />
                            <label htmlFor='email'>Email</label>
                        </div>
                    </div>
                    <div className='row '>
                        <div className='input-field col s12'>
                            <i className='material-icons prefix'>vpn_key</i>
                            <PasswordVisibility />
                            <input onChange={handleChange} value={password} name='password' id='password' type='password' className='validate inputPassword' required />
                            <label htmlFor='password'>Password</label>
                        </div>
                    </div>
                    <button className='waves-effect waves-light btn orange darken-2'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
