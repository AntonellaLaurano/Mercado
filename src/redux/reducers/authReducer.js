import storage from 'redux-persist/lib/storage';
import { types } from '../types/types';

const initialState = {
    access: '',
    role: '',
    details: {}
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                access: action.payload.access,
                role: action.payload.role
            }

        case types.details:
            return {
                ...state,
                details: action.payload
            }
            
        case types.logout:
            storage.removeItem('persist:root');
            return state = initialState;

        default:
            return state;
    }
}