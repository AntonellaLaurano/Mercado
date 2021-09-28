import { API_URL } from '../../Api/api'
import { types } from '../types/types'

export const loginEmail = (user = {}) => {
    const url = `${API_URL}auth/login`;
    return async (dispatch) => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            const userLog = await response.json();
            return dispatch(login(userLog.access, userLog.refresh, userLog.expired, userLog.role.name, userLog.permissions));
        } catch (error) {
            console.log(error);
        }
        
    }
}

export const login = (access, refresh, expired, role, permissions) => {
    return {
        type: types.login,
        payload: {
            access,
            refresh,
            expired,
            role,
            permissions
        }
    };
}

export const detailsUser = (access) => {
    const url = `${API_URL}users?self`;
    return async (dispatch) => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'authorization': access,
                    'content-type': 'application/json'
                }
            });
            const detailsU = await response.json()
            return dispatch(details(detailsU));
        } catch (error) {
            console.log(error);
        }
        
    }
}

export const details = (detailsU) => {
    return {
        type: types.details,
        payload: detailsU
    };
}

export const refreshToken = (refreshToken) => {
    const url = `${API_URL}auth/refresh_token`;
    return async (dispatch) => {
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'authorization': refreshToken,
                    'content-type': 'application/json'
                }
            });
            const renewed = await response.json();
            return dispatch(refresh(renewed));
        } catch (error) {
            console.log(error);
        }
    }
}

export const refresh = (renewed) => {
    return {
        type: types.refresh,
        payload: renewed
    };
}

export const logout = () => {
    return {
        type: types.logout,
        payload: {}
    };
}