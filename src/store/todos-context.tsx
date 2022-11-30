import React, { useState } from 'react';
import Todo from '../models/todo';

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {}
});

type props = {
  children?: React.ReactNode;
};

const TodosContextProvider = ({ children }: props) => {
  // const [todos, setTodos] = useState([new Todo('three'), new Todo('four')]);
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos((prev) => {
      return prev.concat(new Todo(text));
    });
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler
  };

  return <TodosContext.Provider value={contextValue}>{children}</TodosContext.Provider>;
};

export default TodosContextProvider;
