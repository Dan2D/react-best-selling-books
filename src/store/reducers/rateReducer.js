import {GET_RATING} from "../actions/types"

let initialState = {
    rating: {}
}

const rateReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_RATING:
            return {
                rating: {
                ...state.rating,
                [action.title]: {
                rating: action.avgRating,
                 id: action.id
                }
            }
        }
        default:
            return state
    }
}

export default rateReducer;