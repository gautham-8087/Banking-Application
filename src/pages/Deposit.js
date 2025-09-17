import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Deposit() {
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const handleDeposit = (e) => {
    e.preventDefault();
    let balance = parseInt(localStorage.getItem("balance")) || 0;
    let newBalance = balance + parseInt(amount);

    localStorage.setItem("balance", newBalance);

    // save transaction
    let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    transactions.push({ type: "Deposit", amount: parseInt(amount), date: new Date().toLocaleString() });
    localStorage.setItem("transactions", JSON.stringify(transactions));

    alert("₹" + amount + " deposited successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="form-container">
      <h2>Deposit Money</h2>
      <form onSubmit={handleDeposit}>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        /><br />
        <button type="submit">Deposit</button>
      </form>
    </div>
  );
}

export default Deposit;
