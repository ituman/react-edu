import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory()
  return (
    <>
    <h1>Информация</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium officiis corporis molestias minima quas autem ut culpa hic a cupiditate.</p>
    <button className="btn" onClick={() => history.push('/')}>Обратно к списку дел</button>
    </>
  )
}