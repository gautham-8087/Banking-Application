import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#f0f0f0" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Login</Link>
      <Link to="/signup" style={{ marginRight: "10px" }}>Signup</Link>
      <Link to="/dashboard" style={{ marginRight: "10px" }}>Dashboard</Link>
      <Link to="/deposit" style={{ marginRight: "10px" }}>Deposit</Link>
      <Link to="/withdraw" style={{ marginRight: "10px" }}>Withdraw</Link>
      <Link to="/transfer" style={{ marginRight: "10px" }}>Transfer</Link>
      <Link to="/profile" style={{ marginRight: "10px" }}>Profile</Link>
    </nav>
  );
}
