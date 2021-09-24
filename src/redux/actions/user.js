import { API_URL } from '../../Api/api'
import { types } from '../types/types'

export const users = (data) => {
    return {
        type: types.userRead,
        payload: data
    }
}

export const createUser = (user = {}, token = '') => {
    const url = API_URL + 'users';
    return async (dispatch) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'authorization': token,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        const newUser = await response.json();
        console.log(newUser)
        return dispatch(create(newUser.response));
    }
}

export const create = (dataUser) => {
    return {
        type: types.userAdd,
        payload: dataUser
    }
}

export const idGetUser = (id) => {
    return {
        type: types.userGetById,
        payload: id
    }
}

export const updateUser = (user, id, token) => {
    const url = API_URL + `roles/${user.roles.id}/users/${id}/`;
    return async (dispatch) => {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'authorization': token,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        const userU = await response.json();
        const userWithRole = {
                                ...userU.data,
                                roles: user.roles
                            }
        return dispatch(Update(userWithRole));
    }
}

export const Update = (userU) => {
    return {
        type: types.userUpdate,
        payload: userU
    }
}

export const deleteUser = (id, role, token) => {
    const url = API_URL + `users/${role}/${id}`;
    return async (dispatch) => {
        await fetch(url, {
            method: 'DELETE',
            headers: {
                'authorization': token,
                'content-type': 'application/json'
            }
        });
        dispatch(deleteU(id));
    }

}

export const deleteU = (id) => {
    return {
        type: types.userDelete,
        payload: id
    }
}

export const clean = () => {
    return {
        type: types.userClean
    }
}
