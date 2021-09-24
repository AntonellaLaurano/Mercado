import storage from "redux-persist/lib/storage";
import { types } from "../types/types";

const initialState = {
    data: [],
    idGetUser: ''
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.userRead:
            return {
                ...state,
                data: action.payload
            }

        case types.userAdd:
            return {
                ...state,
                data: [...state.data, action.payload]
            };

        case types.userDelete:
            return {
                data: state.data.filter((user) => {
                    return user.id !== action.payload
                })
            };

        case types.userGetById:
            return {
                ...state,
                idGetUser: action.payload
            }

        case types.userUpdate:
            return {
                data: state.data.map((user) => {
                    if(user.id === action.payload.id) {
                        return action.payload
                    } else {
                        return user;
                    }
                    
                })
            }

        case types.userClean:
            storage.removeItem('persist:root');
            return state = initialState;

        default:
            return state;
    }
}