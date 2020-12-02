import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/store/todos'
import { ITodo } from './typings'

export const TodoForm: React.FC = () => {
  const [title, setTitle] = useState<string>('')
  const dispatch = useDispatch()

  const changeTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const addTodoHandler = () => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    dispatch(addTodo(newTodo))
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      addTodoHandler()
      setTitle('')
    }
  }

  return (
    <div className="input-field mt2">
      <input
        value={title}
        onChange={changeTitleHandler}
        onKeyPress={keyPressHandler}
        type="text"
        id="title"
        placeholder="Введите название дела"
      />
      <label htmlFor="title" className="active">Введите название дела</label>
    </div>
  )
}
