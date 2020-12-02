import { ITodo } from "../../components/typings";

export type TodoState = {
  todos: ITodo[]
}

export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export type AddTodoAction = {
  type: typeof ADD_TODO,
  payload: ITodo
}

export type DeleteTodoAction = {
  type: typeof DELETE_TODO,
  payload: ITodo
}

export type ToggleTodoAction = {
  type: typeof TOGGLE_TODO,
  payload: ITodo
}

export const addTodo = (payload: ITodo) => ({
  type: ADD_TODO,
  payload
})

export const deleteTodo = (payload: ITodo) => ({
  type: DELETE_TODO,
  payload
})

export const toggleTodo = (payload: ITodo) => ({
  type: TOGGLE_TODO,
  payload
})

export type TodoAction = AddTodoAction | DeleteTodoAction | ToggleTodoAction