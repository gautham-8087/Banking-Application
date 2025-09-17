import React, { useState } from "react";

function TransactionForm({ type, onSubmit }) {
  const [amount, setAmount] = useState("");
  const [toAccount, setToAccount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ amount, toAccount });
    setAmount("");
    setToAccount("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      {type === "Transfer" && (
        <input
          type="text"
          placeholder="Enter Receiver Account"
          value={toAccount}
          onChange={(e) => setToAccount(e.target.value)}
          required
        />
      )}
      <br />
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <br />
      <button type="submit">{type}</button>
    </form>
  );
}

export default TransactionForm;
