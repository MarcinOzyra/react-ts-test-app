import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

// const itemsArr: string[] = ['one', 'two'];

function App() {
  // const [todos, setTodos] = useState([new Todo('three'), new Todo('four')]);
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos((prev) => {
      return prev.concat(new Todo(text));
    });
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prev) => {
      return prev.filter(item => item.id !== id)
    })
  }

  return (
    <>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </>
  );
}

export default App;
