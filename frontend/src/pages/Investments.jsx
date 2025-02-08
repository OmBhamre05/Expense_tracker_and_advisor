import { useState, useEffect } from "react";

function Investments() {
  const getStoredInvestments = () => {
    const saved = localStorage.getItem("investments");
    return saved ? JSON.parse(saved) : [];
  };

  const [investments, setInvestments] = useState(getStoredInvestments);
  const [investment, setInvestment] = useState("");

  useEffect(() => {
    localStorage.setItem("investments", JSON.stringify(investments));
  }, [investments]);

  const addInvestment = () => {
    if (!investment) return;
    setInvestments([...investments, investment]);
    setInvestment("");
  };

  const deleteInvestment = (index) => {
    const updated = investments.filter((_, i) => i !== index);
    setInvestments(updated);
  };

  return (
    <div>
      <h2>📈 Investment Plans</h2>
      <input value={investment} onChange={(e) => setInvestment(e.target.value)} placeholder="Enter investment" />
      <button onClick={addInvestment}>Add Investment</button>
      <ul>
        {investments.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => deleteInvestment(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Investments;
