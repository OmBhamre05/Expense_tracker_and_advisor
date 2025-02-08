import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/expenses"; // Backend URL

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  // Fetch expenses from backend
  useEffect(() => {
    axios.get(API_URL)
      .then(response => setExpenses(response.data))
      .catch(error => console.error("Error fetching expenses:", error));
  }, []);

  // Delete expense
  const deleteExpense = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setExpenses(expenses.filter(expense => expense._id !== id)); // Update UI
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense._id}>
            {expense.category} - ₹{expense.cost}  
            <button onClick={() => deleteExpense(expense._id)}>❌ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
