import { useState, useEffect } from "react";

function Savings() {
  const getStoredSavings = () => {
    const saved = localStorage.getItem("savings");
    return saved ? JSON.parse(saved) : [];
  };

  const [savings, setSavings] = useState(getStoredSavings);
  const [goal, setGoal] = useState("");

  useEffect(() => {
    localStorage.setItem("savings", JSON.stringify(savings));
  }, [savings]);

  const addSaving = () => {
    if (!goal) return;
    setSavings([...savings, goal]);
    setGoal("");
  };

  const deleteSaving = (index) => {
    const updated = savings.filter((_, i) => i !== index);
    setSavings(updated);
  };

  return (
    <div>
      <h2>💰 Savings Goals</h2>
      <input value={goal} onChange={(e) => setGoal(e.target.value)} placeholder="Enter saving goal" />
      <button onClick={addSaving}>Add Goal</button>
      <ul>
        {savings.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => deleteSaving(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Savings;
