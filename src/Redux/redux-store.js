import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


const reducers = combineReducers({
    profileReducer,
    dialogsReducer
});

const store = createStore();

export default store;