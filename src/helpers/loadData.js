import { API_URL } from '../Api/api'

export const loadData = async (token, direction = 'users') => {
    const url = API_URL + direction;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'authorization': token,
            'content-type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}