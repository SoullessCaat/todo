import './App.css';
import Header from './Header';
import TodoForm from './TodoForm';
import { useState } from 'react';
import TodoList from './TodoList';

function App() {
  
  const [todoList, setTodoList] = useState([
    {id: 1, task: "Chego-to tamushki", done: false},
    {id: 2, task: "A vot tut escho cto-to", done: false},
    {id: 3, task: "Nu i escho cto-to", done: true}
  ]);

  const handleCheck = (id) => {
    let check = todoList.map(task => {
      return task.id === Number(id) ? { ...task, done: !task.done } : { ...task };
    });
    setTodoList(check);
  };

  const handleRemove = (id) => {
    let remove = todoList.filter(task => {
      return !task.done;
    });
    setTodoList(remove);
  };

  const addTask = (input) => {
    let clone = [...todoList];
    clone = [...clone, { id: todoList.length + 1, task: input, done: false }];
    setTodoList(clone);
  };

  return (
    <div className="App">
      <Header />
      <TodoForm addTask={addTask} />
      <TodoList todoList={todoList} handleCheck={handleCheck} handleRemove={handleRemove} />
    </div>
  )
}


export default App;
