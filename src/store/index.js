import {createStore, applyMiddleware, compose} from "redux";
import {initialState} from "./initialState";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

let middleware = [thunk];

const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware)))

export default store;