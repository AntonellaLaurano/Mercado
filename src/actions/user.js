import { API_URL } from "../Api/api";
import { types } from "../types/types"

export const users = (data) => {
    console.log(data)
    return {
        type: types.userRead,
        payload: data
    }
}

export const createUser = (user = {}, token = "") => {
    const url = API_URL + "users";
    return async (dispatch) => {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'authorization': token,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        console.log('response')
        const newUser = await response.json();
        console.log(newUser);
        return dispatch(create(newUser.response));
    }
}

export const create = (dataUser) => {
    console.log(dataUser)
    return {
        type: types.userAdd,
        payload: dataUser
    }
}

export const getUserById = (id, token) => {
    const url = API_URL + `users/${id}`;
    return async (dispacth) => {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                'authorization': token,
                'content-type': 'application/json'
            }
        });
        const UserById = await response.json()
        return dispacth(getUser(UserById));
    }
}

export const getUser = (UserById) => {
    return {
        type: types.userGetById,
        payload: UserById
    }
}

export const updateUser = (user, id, token) => {
    const url = API_URL + `roles/${user.roles.id}/users/${id}/`;
    return async (dispatch) => {console.log("sdsd")
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                'authorization': token,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        const userU = await response.json();
        return dispatch(Update(userU.data));
    }
}

export const Update = (userU) => {
    return {
        type: types.userUpdate,
        payload: userU
    }
}

export const deleteUser = (id, token) => {
    const url = API_URL + `users/${id}`;
    console.log(id);
    return async (dispatch) => {
        await fetch(url, {
            method: "DELETE",
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
