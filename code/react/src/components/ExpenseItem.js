import './ExpenseItem.css';

function ExpenseItem(props) { // not ExpenseItem(title, amount, date)
	// regular JS
	const expenseDate = new Date(2021, 2, 28); // 2021년 3월 28일
	const expenseTitle = 'Car Insurance';
	const expenseAmount = 294.67;

	// JSX
	return (
		<div className="expense-item">
			<div>{props.date.toISOString()}</div>
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">{props.amount}</div>
			</div>
		</div>
	);
}
export default ExpenseItem;