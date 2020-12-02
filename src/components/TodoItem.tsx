import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo } from '../redux/store/todos'
import { ITodo } from './typings'

declare var confirm: (question: string) => boolean

interface TodoItemProps {
  todo: ITodo
}
export const TodoItem: React.FC<TodoItemProps> = ({todo}) => {
  const dispatch = useDispatch()

  const removeHandler = () => {
    if (!confirm('Вы действительно хотите удалить задачу?')) {
      return
    }
    dispatch(deleteTodo(todo))
  }

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
          onChange={() => dispatch(toggleTodo(todo))}
        />
        <span>{todo.title}</span>
        <i
          onClick={(event) => {
            event.preventDefault()
            removeHandler()
          }}
          className="material-icons red-text"
        >delete</i>
      </label>
    </li>
  </>
  )
}