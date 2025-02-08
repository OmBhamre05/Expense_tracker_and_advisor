const mongoose = require("mongoose");

// Define Expense Schema
const expenseSchema = new mongoose.Schema({
  category: { type: String, required: true },
  cost: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  description: { type: String }
});

// Create Expense Model
const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
