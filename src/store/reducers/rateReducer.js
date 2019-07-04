import {GET_RATING} from "../actions/types"

const rateReducer = (state = {}, action) => {
    switch(action.type){
        case GET_RATING:
            return {
                ...state,
                rating: [...state.rating, action.avgRating],
                id: [...state.id, action.id]
            }
        default:
            return state
    }
}

export default rateReducer;