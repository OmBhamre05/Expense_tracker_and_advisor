function ExpenseBlock({ expense, index, updateExpense, deleteExpense }) {
  return (
    <div className="expense-block">
      <div>
        <h4>{expense.category}</h4>
        <p><strong>💰 Cost:</strong> ${expense.cost}</p>
        <p><strong>📅 Date:</strong> {expense.date}</p>
        <p><strong>💳 Payment:</strong> {expense.paymentMethod}</p>
      </div>
      <div>
        <button onClick={() => updateExpense(index)}>✏️ Edit</button>
        <button onClick={() => deleteExpense(index)} className="delete-btn">🗑️ Delete</button>
      </div>
    </div>
  );
}

export default ExpenseBlock;
