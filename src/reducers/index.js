import counterReducer from "./counter";
import isLoggedReducer from "./islogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: isLoggedReducer
});

export default allReducers;