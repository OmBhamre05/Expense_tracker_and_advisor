import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

function ExpenseCharts({ expenses }) {
  // Group expenses by category
  const categoryData = expenses.reduce((acc, exp) => {
    const found = acc.find(item => item.name === exp.category);
    if (found) {
      found.value += Number(exp.cost);
    } else {
      acc.push({ name: exp.category, value: Number(exp.cost) });
    }
    return acc;
  }, []);

  // Group expenses by day for weekly spending
  const weekData = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateString = date.toDateString();
    
    const total = expenses
      .filter(exp => new Date(exp.date).toDateString() === dateString)
      .reduce((sum, exp) => sum + Number(exp.cost), 0);
    
    weekData.push({ day: date.toLocaleDateString("en-US", { weekday: "short" }), spent: total });
  }

  const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#8E44AD"];

  return (
    <div className="charts-container">
      <h3>📊 Expense Breakdown</h3>

      {/* Pie Chart */}
      <PieChart width={350} height={300}>
        <Pie data={categoryData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value" label>
          {categoryData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

      {/* Bar Chart */}
      <h3>📅 Weekly Spending</h3>
      <BarChart width={350} height={300} data={weekData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="spent" fill="#3498db" />
      </BarChart>
    </div>
  );
}

export default ExpenseCharts;
