import React, { useEffect, useState } from "react";

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const savedTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(savedTransactions);
  }, []);

  return (
    <div className="transactions">
      <h2>Transaction History</h2>
      {transactions.length > 0 ? (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Type</th>
              <th>To</th>
              <th>Amount (₹)</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, index) => (
              <tr key={index}>
                <td>{t.type}</td>
                <td>{t.to || "-"}</td>
                <td>{t.amount}</td>
                <td>{t.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No transactions found.</p>
      )}
    </div>
  );
}

export default TransactionList;
