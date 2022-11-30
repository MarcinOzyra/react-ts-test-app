import Todos from './components/Todos';
import Todo from './models/todo';

// const itemsArr: string[] = ['one', 'two'];

function App() {
  const todos = [new Todo('three'), new Todo('four')];

  return <Todos items={todos} />;
}

export default App;
