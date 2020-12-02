import React, { useState } from 'react';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { ITodo } from '../components/typings';

export const TodosPage: React.FC = () => {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  )
}