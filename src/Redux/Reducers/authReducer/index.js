import { createStore } from "redux";

const initialState = {
    token: null
}

const Reducers = (state, action) =>{
    switch (action.type) {
        case "SET_TOKEN":
            return{
                ...state,
                token: action.payload.token
            }

            default:
                return state
    }
}

export default createStore (Reducers);