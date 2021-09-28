import { API_URL } from '../../Api/api'
import { types } from '../types/types'

export const users = (data) => {
    return {
        type: types.userRead,
        payload: data
    }
}

export const createUser = (user = {}, token = '') => {
    const url = `${API_URL}users`;
    return async (dispatch) => {
        try {
            const response = fetch(url, {
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
        } catch (error) {
            console.log(error);   
        }
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
    const url = `${API_URL}roles/${user.roles.id}/users/${id}/`;
    return async (dispatch) => {
        try {
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
        } catch (error) {
            console.log(error);
        }
    }
}

export const Update = (userU) => {
    return {
        type: types.userUpdate,
        payload: userU
    }
}

export const deleteUser = (id, role, token) => {
    console.log('sss')
    console.log(role)
    const url = `${API_URL}/users/${id}`;
    return async (dispatch) => {
        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'authorization': token,
                    'content-type': 'application/json'
                }
            });
            console.log(response)
            dispatch(deleteU(id));
        } catch (error) {
            console.log(error);
        }
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
