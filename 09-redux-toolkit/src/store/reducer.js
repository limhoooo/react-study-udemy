import { combineReducers } from "redux";
import plusReducer from './plusReducer';


const reducer = combineReducers(
    { plusReducer }
)

export default reducer;