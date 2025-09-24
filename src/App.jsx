import { useState , useEffect} from 'react'
import { ToDoProvider } from './contexts'
import Todoitem from './components/Todoitem'
import './App.css'
import TodoForm from './components/TodoForm'


function App() {
  const [todos, setToDos] = useState([])

  const addToDo = (title) => {
    setToDos((prev) => [...prev, { id: prev.length + 1, title, completed: false }])
  }

  const updatedToDo = (id, title) => {
  setToDos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, ...title } : todo)));
};

  const toggleToDo = (id) => {
    setToDos((prev) => prev.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  const deleteToDo = (id) => {
    setToDos((prev) => prev.filter(todo => todo.id !== id))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos && todos.length > 0) setToDos(todos)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <ToDoProvider value={{ todos, addToDo, updatedToDo, toggleToDo, deleteToDo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map(todo => (
              <div key={todo.id} className="w-full">
                <Todoitem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoProvider>
  )
}


export default App
