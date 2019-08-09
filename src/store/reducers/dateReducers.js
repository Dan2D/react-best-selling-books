import {CHANGE_WEEK, GET_HOME_CONTENT}  from "../actions/types";

let initialState = {
    date: new Date(),
    minDate: new Date('2008-06-08'),
    maxDate: new Date()
}


const dateReducers = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_WEEK:
            return {...state,
                    dateCurr: action.payload
             }
             case GET_HOME_CONTENT:
                 return {
                    dateCurr: new Date(),
                    dateMin: new Date("2008-06-08"),
                    dateMax: new Date()
                 }
        default:
            return state;
    }
}

export default dateReducers;