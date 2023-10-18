import { ADD_CUSINES_ERROR, ADD_CUSINES_REQUEST, ADD_CUSINES_SUCCESS } from "../constants/cusinesAction"

const initialState = {
    assetList: [],
    loading: false,
    error: null,

}


const cusines = (state = initialState, action) => {
    switch (action.type) {

        case ADD_CUSINES_REQUEST:
            console.log("reducer", action.data)
            return {
                ...state,
                loading: true,
                assetList: action.payload,
            }
        case ADD_CUSINES_SUCCESS:
            console.log("reducer", action.data)
            return {
                ...state,
                loading: false,
                assetList: action.data,
                // count: action.count
            }
        case ADD_CUSINES_ERROR:
            return {
                loading: false,
                error: action.err
            }
        default:
            return state
    }
}

export default cusines