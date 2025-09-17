import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Withdraw() {
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const handleWithdraw = (e) => {
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
    transactions.push({ type: "Withdraw", amount: parseInt(amount), date: new Date().toLocaleString() });
    localStorage.setItem("transactions", JSON.stringify(transactions));

    alert("₹" + amount + " withdrawn successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="form-container">
      <h2>Withdraw Money</h2>
      <form onSubmit={handleWithdraw}>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        /><br />
        <button type="submit">Withdraw</button>
      </form>
    </div>
  );
}

export default Withdraw;
