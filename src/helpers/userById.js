import { API_URL } from '../Api/api';
/**
 * Esta funcion devuelve un usuario por su id.
 * @param {Number} id El id del usuario para buscar.
 * @param {String} token El token de acceso del usuario que esta en sesion.
 * @returns {Object} retorna un objeto que contiene los datos del usuario si la peticion fue exitosa.
 */
export const userById = async (id, token) => {
    const url = API_URL + `users/${id}`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'authorization': token,
            'content-type': 'application/json'
        }
    });
    return response;
}