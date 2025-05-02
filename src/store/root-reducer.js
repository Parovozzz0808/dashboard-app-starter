import { combineReducers } from "redux";
import { positionReduser } from "./positions/positions-reducer";
import { filterReducer } from "./filters/filter-reducer";


export const rootReducer = combineReducers({
    positions: positionReduser,
    filters: filterReducer,
});