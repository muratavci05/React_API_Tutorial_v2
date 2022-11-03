import { createStore } from "redux"

export const SET_CATEGORIES = "set_categories";


const initialState = {
    categories: null,
    initialized: false,
}

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CATEGORIES:
            return{
                ...state,
                categories: action.payload.categories,
                initialized: true,
            }

            default:
                return state
    }

}

export default Reducer;