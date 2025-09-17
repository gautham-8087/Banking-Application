import React, { useState, useEffect } from "react";

function Dashboard() {
  const [balance, setBalance] = useState(1000); // default balance
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const savedTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(savedTransactions);
  }, []);

  return (
    <div className="dashboard">
      <h2>Welcome to Your Banking Dashboard</h2>
      <h3>Account Balance: ₹{balance}</h3>

      <h3>Recent Transactions:</h3>
      <ul>
        {transactions.length > 0 ? (
          transactions.map((t, index) => (
            <li key={index}>
              {t.type}: ₹{t.amount}
            </li>
          ))
        ) : (
          <p>No transactions yet.</p>
        )}
      </ul>
    </div>
  );
}

export default Dashboard;
