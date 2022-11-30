import React, { useRef } from 'react';
import classes from './NewTodo.module.css';

type props = {
  onAddTodo: (text: string) => void;
};

const NewTodo = ({ onAddTodo }: props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      //error
      return;
    }

    onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
