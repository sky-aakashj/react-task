import * as actionTypes from "./action"
import data from '../constant.json'

const initialState = data;





const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_VALUE:
            return {
                ...state,
                ...action.payload

            }

        default:
            return state
    }
}

export default reducer;