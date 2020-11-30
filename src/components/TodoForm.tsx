import React, { useState } from 'react'

type TodoFormProps = {
  onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
  const [title, setTitle] = useState<string>('')

  const changeTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(title)
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
