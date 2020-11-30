import React from 'react'
import { TodoItem } from './TodoItem'
import { ITodo } from './typings'

type TodoListProps = {
  todos: ITodo[]
  onRemove: (id: number) => void
  onToggle: (id: number) => void
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
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
            onToggle={onToggle}
            onRemove={onRemove}
          />
        )
      }
    </ul>
  )
}