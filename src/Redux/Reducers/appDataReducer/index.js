
export const SET_APP_DATA = "set_app_data";
export const REMOVE_APP_DATA = "remove_app_data";

const initialState = {
    appData: null,
}


const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_APP_DATA:
            return{
                ...state,
                appData: action.payload.appData,
            }

        case REMOVE_APP_DATA:
            return{
                ...state,
                appData: null,
            }

            default:
                return state
    }
    
}



export default Reducer;