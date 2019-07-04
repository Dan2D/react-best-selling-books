import {combineReducers} from "redux";
import menuReducers from "./menuReducers";
import dateReducers from "./dateReducers";
import pageReducers from "./pageReducers";
import rateReducer from "./rateReducer";
import searchReducers from "./searchReducers";
// COMBINE DATE REDUCERS WITH PAGE REDUCERS
const rootReducer = combineReducers({menu: menuReducers, search: searchReducers, date: dateReducers, page: pageReducers, rate: rateReducer})

export default rootReducer;