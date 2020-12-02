import React from 'react'
import { useSelector } from 'react-redux'
import { TodoItem } from './TodoItem'
import { AppState } from '../redux/reducers/rootReducer'

export const TodoList: React.FC = () => {
  const todos = useSelector((state: AppState) => state.todosState.todos)
  if (!todos.length) {
    return <div className="center">Задач пока нет!</div>
  }
  return (
    <ul>
      {
        todos.map(todo => 
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        )
      }
    </ul>
  )
}