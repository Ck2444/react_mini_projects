import { useState } from 'react';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoLIist from './components/Todos/TodoLIist';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    setTodos([...todos, text]);
  };

  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoLIist todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
