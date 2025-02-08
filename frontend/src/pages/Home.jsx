import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />  {/* ✅ Sidebar is correctly included */}
        <div style={{ flex: 1 }}>
          <h1>Expense Tracker</h1>
          <ExpenseForm />
          <ExpenseList />
        </div>
      </div>
    </div>
  );
};

export default Home;
