import React from 'react'
import { ITodo } from './typings'

interface TodoItemProps {
  todo: ITodo
  onToggle: (id: number) => void
  onRemove: (id: number) => void
}
export const TodoItem: React.FC<TodoItemProps> = ({todo, onToggle, onRemove}) => {
  const classes = ['todo']
  if (todo.completed) {
    classes.push('completed')
  }
  return (
  <>
    <li className={classes.join(' ')}>
      <label>
        <input type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span>{todo.title}</span>
        <i
          onClick={(event) => {
            event.preventDefault()
            onRemove(todo.id)
          }}
          className="material-icons red-text"
        >delete</i>
      </label>
    </li>
  </>
  )
}