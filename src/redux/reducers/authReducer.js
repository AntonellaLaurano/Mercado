import storage from 'redux-persist/lib/storage';
import { types } from '../types/types';

const initialState = {
    log: false,
    access: '',
    refresh: '',
    expired: '',
    role: '',
    details: {}
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                log: true,
                access: action.payload.access,
                refresh: action.payload.refresh,
                expired: action.payload.expired,
                role: action.payload.role,
                permissions: action.payload.permissions
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