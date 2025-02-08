import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/expenses"; // Ensure this URL is correct

const Sidebar = () => {
  const [expenses, setExpenses] = useState([]); // ✅ Default to empty array
  const [totalSpent, setTotalSpent] = useState(0);
  const [remainingBudget, setRemainingBudget] = useState(0);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          setExpenses(response.data); // ✅ Ensure expenses is always an array
          calculateBudget(response.data);
        } else {
          console.warn("Invalid API response:", response.data);
          setExpenses([]); // ✅ Prevents undefined issues
        }
      })
      .catch((error) => {
        console.error("Error fetching expenses:", error);
        setExpenses([]); // ✅ Prevents app from crashing
      });
  }, []);

  const calculateBudget = (expensesData) => {
    if (!Array.isArray(expensesData)) return; // ✅ Ensure it's an array
    const total = expensesData.reduce((sum, expense) => sum + (expense.cost || 0), 0);
    const budget = 50000; // Example budget limit
    setTotalSpent(total);
    setRemainingBudget(budget - total);
  };

  return (
    <div>
      <h2>Budget Overview</h2>
      <p>Total Spent: ₹{totalSpent}</p>
      <p>Remaining Budget: ₹{remainingBudget}</p>
    </div>
  );
};

export default Sidebar;
