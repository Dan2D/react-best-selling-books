import {GET_SEARCH_TXT, SEARCH_TYPE} from "../actions/types";

export function updateSearchTxt(text){
    return {
        type: GET_SEARCH_TXT,
        payload: text
    }
}

export function updateSearchTyp(type){
    return {
        type: SEARCH_TYPE,
        payload: type
    }
}