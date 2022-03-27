import { combineReducers } from "redux";
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import menuReducer from "./menu/menu.reducer";
import tokenReducer from "./token/token.reducer";

import userReducer from './user/user.reducer'


const persistConfig = {
    key: "root", 
    storage,
    whitelist: ['menu', 'user']
}




const rootReducer =  combineReducers({
    user: userReducer,
    token: tokenReducer,
    menu: menuReducer,
})

export default persistReducer(persistConfig,rootReducer)