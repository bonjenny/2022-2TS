import Todo from './components/Todo';
import ExpenseItem from './components/ExpenseItem'

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React' />
      <Todo text='섹션 1 학습' />
      <ExpenseItem />
    </div>
  );
}

export default App;
