import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/expenses"; // Backend URL

const ExpenseForm = ({ onExpenseAdded }) => {
  const [category, setCategory] = useState("");
  const [cost, setCost] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category || !cost) return alert("Category and Cost are required!");

    try {
      const newExpense = { category, cost: Number(cost), description };
      const response = await axios.post(`${API_URL}/add`, newExpense);

      onExpenseAdded(response.data.expense); // Update UI
      setCategory("");
      setCost("");
      setDescription("");
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
      <input type="number" placeholder="Cost" value={cost} onChange={(e) => setCost(e.target.value)} required />
      <input type="text" placeholder="Description (optional)" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">➕ Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
