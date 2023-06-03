import { createStore,combineReducers } from "redux";
import todosReducer from "./reducers/todosReducer";

const rootReducer=combineReducers({
    todosState:todosReducer
})

const store=createStore(rootReducer)

export default store;