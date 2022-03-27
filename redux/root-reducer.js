import { combineReducers } from "redux";

import menuReducer from "./menu/menu.reducer";
import tokenReducer from "./token/token.reducer";

import userReducer from './user/user.reducer'



export default combineReducers({
    user: userReducer,
    token: tokenReducer,
    menu: menuReducer,
})