import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Transfer() {
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const handleTransfer = (e) => {
    e.preventDefault();
    let balance = parseInt(localStorage.getItem("balance")) || 0;

    if (parseInt(amount) > balance) {
      alert("Insufficient balance!");
      return;
    }

    let newBalance = balance - parseInt(amount);
    localStorage.setItem("balance", newBalance);

    // save transaction
    let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    transactions.push({
      type: "Transfer",
      to: toAccount,
      amount: parseInt(amount),
      date: new Date().toLocaleString(),
    });
    localStorage.setItem("transactions", JSON.stringify(transactions));

    alert("₹" + amount + " transferred to " + toAccount + "!");
    navigate("/dashboard");
  };

  return (
    <div className="form-container">
      <h2>Transfer Money</h2>
      <form onSubmit={handleTransfer}>
        <input
          type="text"
          placeholder="Enter Receiver Account"
          value={toAccount}
          onChange={(e) => setToAccount(e.target.value)}
          required
        /><br />
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        /><br />
        <button type="submit">Transfer</button>
      </form>
    </div>
  );
}

export default Transfer;
