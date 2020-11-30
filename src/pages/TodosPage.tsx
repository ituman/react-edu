import React, { useEffect, useState } from 'react';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { ITodo } from '../components/typings';

declare var confirm: (q: string) => boolean

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]')
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodoHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    setTodos(prev => [newTodo, ...prev])
  }

  const removeHandler = (id: number) => {
    if (!confirm('Вы действительно хотите удалить задачу?')) {
      return
    }
    setTodos(prev => (
      prev.filter(todo => todo.id !== id)
    ))
  }

  // useEffect(() => {console.log(todos)}, [todos])

  const toggleHandler = (id: number) => {
    setTodos(
      prev => prev.map(
        todo => {
          if (todo.id === id) {
            // todo.completed = !todo.completed
            return {...todo, completed: !todo.completed}
          }
          return todo
        }
      )
    )
  }

  return (
    <>
      <TodoForm onAdd={addTodoHandler}/>
      <TodoList
        todos={todos}
        onRemove={removeHandler}
        onToggle={toggleHandler}
      />
    </>
  )
}