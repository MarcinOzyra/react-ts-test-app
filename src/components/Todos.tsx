import React from 'react';
import Todo from '../models/todo';
import { Todo as TodoComponent } from './Todo';
import classes from './Todos.module.css';

type props = {
  items: Todo[];
  onRemoveTodo: (id: string) => void;
  // children?: React.ReactNode;
};

const Todos = ({ items, onRemoveTodo }: props) => {
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        // <TodoComponent text={item.text} key={item.id} onRemoveTodo={onRemoveTodo.bind(null, item.id)} />
        <TodoComponent text={item.text} key={item.id} onRemoveTodo={() => onRemoveTodo(item.id)} />
      ))}
    </ul>
  );
};

export default Todos;

/*
const Todos: React.FC<{items: string[]}> = (props) => {
  return (
    <ul>
      {props.items.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
};

export default Todos;
*/
