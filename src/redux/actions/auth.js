import { API_URL } from '../../Api/api'
import { types } from '../types/types'

export const loginEmail = (user = {}) => {
    const url = API_URL + 'auth/login';
    return async (dispatch) => {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        const userLog = await response.json();
        return dispatch(login(userLog.access, userLog.role.name));
    }
}

export const login = (access, role) => {
    return {
        type: types.login,
        payload: {
            access,
            role
        }
    };
}

export const logout = () => {
    return {
        type: types.logout,
        payload: {}
    };
}

export const detailsUser = (token) => {
    const url = API_URL + 'users?self';
    return async (dispatch) => {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                'authorization': token,
                'content-type': 'application/json'
            }
        });
        const detailsU = await response.json()
        return dispatch(details(detailsU));
    }
}

export const details = (detailsU) => {
    return {
        type: types.details,
        payload: detailsU
    };
}
