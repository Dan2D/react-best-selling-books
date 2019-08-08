import {GET_NEW_GENRE, GET_HOME_CONTENT, GET_SEARCH_TXT, SEARCH_TYPE, SEARCH_AUTH} from "../actions/types";
import {initialState} from "../initialState";


const searchReducers = (state = initialState, action) => {
    switch(action.type){
        case SEARCH_AUTH:
            return {
                ...state,
                searchType: 'author'
            }
            case GET_HOME_CONTENT:
                return {
                    ...state,
                    searchTxt: '',
                    searchType: 'title'
                }
        case GET_NEW_GENRE:
            return{
                ...state,
                searchTxt: '',
                searchType: 'title'
            }
        case GET_SEARCH_TXT:
            return {
                ...state,
                searchTxt: action.payload}
        case SEARCH_TYPE:
            return {
                ...state,
                searchType: action.payload
            }
        default:
            return state;
    }
}

export default searchReducers;