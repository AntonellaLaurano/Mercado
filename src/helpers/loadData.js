import { API_URL } from '../Api/api'
/**
 * Cargar lista de usuarios.
 * @param {String} token El token de acceso del usuario en sesion.
 * @param {String} [direction] Para completar el enpoint de la petición.
 * @returns {Object} Un objeto con la lista de usarios
 */
export const loadData = async (token, direction = 'users') => {
    const url = `${API_URL}${direction}`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'authorization': token,
                'content-type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}