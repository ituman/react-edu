import { ITodo } from "../../components/typings";
import { TodoState } from "../store/todos"

export const addTodoHandler = (state: TodoState, payload: ITodo) => {
  const newTodoList = [...state.todos, payload]
  localStorage.setItem('todos', JSON.stringify(newTodoList))
  return { ...state, todos: newTodoList}
}

export const deleteTodoHandler = (state: TodoState, payload: ITodo) => {
  const newTodoList = state.todos.filter(todo => todo.id !== payload.id)
  localStorage.setItem('todos', JSON.stringify(newTodoList))
  return { ...state, todos: newTodoList}
}

export const toggleTodoHandler = (state: TodoState, payload: ITodo) => {
  const newTodoList = state.todos.map((todo: ITodo) => {
    if (todo.id === payload.id) {
      return {...todo, completed: !todo.completed}
    }
    return todo
  })
  localStorage.setItem('todos', JSON.stringify(newTodoList))
  return { ...state, todos: newTodoList}
}