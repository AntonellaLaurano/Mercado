import { API_URL } from "../Api/api"
import { types } from "../types/types"

export const loginEmail = (user = {}) => {
    const url = API_URL + "auth/login";
    return async (dispatch) => {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        const userLog = await response.json();
        return dispatch(login(userLog.access));
    }
}

export const login = (access) => {
    return {
        type: types.login,
        payload: access
    };
}

export const logout = () => {
    return {
        type: types.logout,
        payload: {}
    };
}

export const detailsUser = (token) => {
    const url = API_URL + "users?self";
    return async (dispatch) => {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                'authorization': token,
                'content-type': 'application/json'
            }
        });
        const detailsU = await response.json()
        return dispatch(details(detailsU.firstname, detailsU.lastname, detailsU.email, detailsU.roles.name));
    }
}

export const details = (firstname, lastname, email, role) => {
    return {
        type: types.details,
        payload: {
            firstname,
            lastname,
            role,
            email
        }
    };
}
