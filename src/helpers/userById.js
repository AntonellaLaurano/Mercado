import { API_URL } from "../Api/api";

export const userById = async (id, token) => {
    const url = API_URL + `users/${id}`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'authorization': token,
            'content-type': 'application/json'
        }
    });
    return response;
}