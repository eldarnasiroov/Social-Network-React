import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer
});

const store = createStore(reducers);

export default store;
