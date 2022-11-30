import React from 'react';
import classes from './Todo.module.css';

type props = {
  text: string;
  onRemoveTodo: () => void;
};

export const Todo = ({ text, onRemoveTodo }: props) => {
  const removeTodoHandler = (e: React.MouseEvent) => {
    onRemoveTodo();
    // console.log(e);
  };

  return (
    <li className={classes.item} onClick={removeTodoHandler}>
      {text}
    </li>
  );
};

// export default Todo;
