import { ADD_CUSINES_REQUEST } from "../constants/cusinesAction"


export const addCusinesData = (data) =>  {
    console.log("action", data)
    return {
        type: ADD_CUSINES_REQUEST,
        data
    }
}