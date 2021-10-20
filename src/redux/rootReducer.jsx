import {combineReducers} from "redux"
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"

import profilesReducer from "./Profiles/profiles.reducer"


const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    profile: profilesReducer
})

export default persistReducer(persistConfig, rootReducer)