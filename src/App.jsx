import { useState } from 'react'
import Todo from "./components/Todo"
import './App.css'

function App() {

    const [todos, setTodos] = useState([])

    function Submit(e) {
        e.preventDefault()
        let fm = new FormData(e.target)

        let todo = {
            id: Math.random(),
            title: fm.get('title'),
            time: new Date().toLocaleTimeString()
        }

        setTodos([...todos, todo])
    }

    const handleDelete = (todoId) => {
        setTodos(todos.filter(todo => todo.id !== todoId))
    }
    
    return (
        <>
            <div className="container">
                <div className="head">
                    <div className="top">
                        <h1>To-Do List</h1>
                    </div>
                    <div className="bottom">
                        <form onSubmit={Submit} id='todoMaker'>
                            <input name='title' placeholder='Make Todo' type="text" />
                            <button>Add</button>
                        </form>
                    </div>
                </div>
                <div className="line"></div>
                <div className="todos">
                    {todos.map(todo => (
                        <Todo key={todo.id} task={todo} onDelete={handleDelete} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default App