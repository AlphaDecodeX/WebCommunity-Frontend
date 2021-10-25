import storeTheInfo from "./storeInfo";

import { combineReducers } from "redux";

const reducers = combineReducers(
    {
        //   myNumber:changeTheNumber
        storeTheInfo
    }
);

export default reducers;