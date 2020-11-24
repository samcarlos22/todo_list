import React from 'react'
import './style.css'

function Todo(props) {
  return (
    <div className='container'>
      <li>{props.text}</li>
      <button>delete</button>
    </div>
  )
}

export default Todo
