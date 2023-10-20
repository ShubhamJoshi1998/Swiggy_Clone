import { ADD_CUSINES_ERROR, ADD_CUSINES_REQUEST, ADD_CUSINES_SUCCESS, ADD_LOCATION_DATA_ERROR, ADD_LOCATION_DATA_REQUEST, ADD_LOCATION_DATA_SUCCESS, GET_ADDRESS_ERROR, GET_ADDRESS_REQUEST, GET_ADDRESS_SUCCESS } from "../constants/cusinesAction"

const initialState = {
    assetList: [],
    areaData: [],
    address: [],
    loading: false,
    error: null,

}


const cusines = (state = initialState, action) => {
    switch (action.type) {

        case ADD_CUSINES_REQUEST:
            // console.log("reducer", action.data)
            return {
                ...state,
                loading: true,
                assetList: action.payload,
            }
        case ADD_CUSINES_SUCCESS:
            // console.log("reducer", action.data)
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
        case ADD_LOCATION_DATA_REQUEST:
            // console.log("reducer area", action.payload)
            return {
                ...state,
                loading: true,
                areaData: action.payload,
            }
        case ADD_LOCATION_DATA_SUCCESS:
            // console.log("reducer area", action.data)
            return {
                ...state,
                loading: false,
                areaData: action.data,
                // count: action.count
            }
        case ADD_LOCATION_DATA_ERROR:
            return {
                loading: false,
                error: action.err
            }
        case GET_ADDRESS_REQUEST:
            console.log("reducer area", action.payload)
            return {
                ...state,
                loading: true,
                address: action.payload,
            }
        case GET_ADDRESS_SUCCESS:
            // console.log("reducer area", action.data)
            return {
                ...state,
                loading: false,
                address: action.data,
                // count: action.count
            }
        case GET_ADDRESS_ERROR:
            return {
                loading: false,
                error: action.err
            }
        default:
            return state
    }
}

export default cusines