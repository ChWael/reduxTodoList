import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

function App() {

  return (
    <div className='App'>
      <h1> Another List For Another Day </h1>
      <AddTodo  />
      <TodoList
      />
    </div>
  );
}

export default App;