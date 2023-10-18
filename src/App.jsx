import { useState } from 'react'
import "./App.css"

const App = () => {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const  generateId = ()=> {
    return Math.floor(Math.random() * 1000)
  }

  const handleSubmit = ()=> {
    setTodos(todos => 
      todos.concat({
        text: input,
        id: generateId()
      })
      )
      setInput('')
  }

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id))
  }

  return (
    <div className='container'><input type="text" placeholder='New todo' value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>

      <ul className="todos-list">
        {todos.map(({text, id}) => {
          return <li className="todo" key={id}>
            <span>{text}</span>
            <button className="close" onClick={()=> removeTodo(id)}>X</button>
          </li>
        })}
      </ul>
    </div>
  )
}

export default App 