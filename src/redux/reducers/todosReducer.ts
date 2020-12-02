import { addTodoHandler, deleteTodoHandler, toggleTodoHandler } from "../actions/todos"
import { ADD_TODO, DELETE_TODO, TodoAction, TodoState, TOGGLE_TODO } from "../store/todos"


const getInitialTodoState = (): TodoState => {
  const currentTodoList = localStorage.getItem('todos')
  if (currentTodoList) {
    return {
      todos: JSON.parse(currentTodoList)
    }
  }
  return {
    todos: []
  }
}

export const todosReducer = (state: TodoState = getInitialTodoState(), action: TodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      return addTodoHandler(state, action.payload)
    case DELETE_TODO:
      return deleteTodoHandler(state, action.payload)
    case TOGGLE_TODO:
      return toggleTodoHandler(state, action.payload)
    default: return state
  }
}
