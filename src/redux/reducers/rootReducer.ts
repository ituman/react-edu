import { combineReducers } from "redux";
import { todosReducer } from "./todosReducer"

export const rootReducer = combineReducers({
  todosState: todosReducer
})

export type AppState = ReturnType<typeof rootReducer>
