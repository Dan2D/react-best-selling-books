import {combineReducers} from "redux";
import menuReducers from "./menuReducers";
import dateReducers from "./dateReducers";
import pageReducers from "./pageReducers";
import searchReducers from "./searchReducers";

const rootReducer = combineReducers({menu: menuReducers, search: searchReducers, date: dateReducers, page: pageReducers})

export default rootReducer;