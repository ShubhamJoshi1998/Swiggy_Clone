import { ADD_CUSINES_REQUEST, ADD_LOCATION_DATA_REQUEST, GET_ADDRESS_REQUEST } from "../constants/cusinesAction"


export const addCusinesData = (data) => {
    // console.log("action", data)
    return {
        type: ADD_CUSINES_REQUEST,
        payload: data
    }
}

export const getLocationData = (data) => {
    // console.log("actionlocation", data)  
    return {
        type: ADD_LOCATION_DATA_REQUEST,
        payload: data
    }
}

export const getAddress = (name, address) => {
    const data = { name, address }
    // console.log("actionlocation", data)
    return {
        type: GET_ADDRESS_REQUEST,
        payload: data
    }
}