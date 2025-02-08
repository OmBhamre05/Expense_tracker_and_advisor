const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");

// ✅ Add New Expense
router.post("/add", async (req, res) => {
  try {
    const { category, cost, description } = req.body;
    const newExpense = new Expense({ category, cost, description });
    await newExpense.save();
    res.status(201).json({ message: "Expense added successfully", expense: newExpense });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Fetch All Expenses
router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ date: -1 }); // Sort by latest expenses
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Delete Expense by ID
router.delete("/:id", async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
