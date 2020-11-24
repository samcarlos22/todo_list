import { Component } from 'react'
import ReactDOM from 'react-dom'
import Todo from './components/Todo'
import './index.css'

export default class Home extends Component {
  state = {
    todos: ['todo1', 'todo2', 'todo3'],
  }

  render() {
    return (
      <ul className='todo-list'>
        {this.state.todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    )
  }
}

ReactDOM.render(<Home />, document.getElementById('root'))
