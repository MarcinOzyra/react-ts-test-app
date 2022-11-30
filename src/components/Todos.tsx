import React from 'react';
import Todo from '../models/todo';

type props = {
  items: Todo[];
  children?: React.ReactNode;
};

const Todos = ({ items, children }: props) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
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
