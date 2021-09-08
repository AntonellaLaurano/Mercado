import storage from "redux-persist/lib/storage";
import { types } from "../types/types";

const initialState = {
    access: "",
    details: {}
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                access: action.payload
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