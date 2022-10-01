import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
	return (
		<div className="expenses">
      {props.items ? props.items.map(c => {
        return (
          <ExpenseItem
            title={c.title}
            amount={c.amount}
            date={c.date} />
        )}) : <ExpenseItem />
      }
		</div>
	);
}

export default Expenses;