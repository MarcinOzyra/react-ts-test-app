import { useContext } from 'react';
import { Todo as TodoComponent } from './Todo';
import classes from './Todos.module.css';
import { TodosContext } from '../store/todos-context';

const Todos = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoComponent text={item.text} key={item.id} onRemoveTodo={() => todosCtx.removeTodo(item.id)} />
      ))}
    </ul>
  );
};

export default Todos;
