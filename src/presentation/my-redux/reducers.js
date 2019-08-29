import {combineReducers} from "redux";
import * as actions from "./actions.js";

const APP_DEFAULT = {
    dataUser: [],
    loadDataUser: false
};
const app = (state = APP_DEFAULT, action) => {
    switch (action.type) {
        case actions.SEND_DATA_DISPATCH:
            return {
                ...state,
                dataUser: state.dataUser.concat(action.data),
                loadDataUser: true
            };
        case actions.CLEAR_DATA_DISPATCH:
            return {
                ...state,
                loadDataUser: action.isLoad
            };
        default:
            return state;
    }
};

export const combinedReducers = combineReducers({app});
