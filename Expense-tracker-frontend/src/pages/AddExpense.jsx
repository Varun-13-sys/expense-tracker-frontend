import { useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function AddExpense() {
  const navigate = useNavigate();
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    category: "",
    date: ""
  });

  const change = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await api.post("", expense);
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Add Expense</h2>

      <form onSubmit={submit}>
        <input name="title" placeholder="Title" onChange={change} required />
        <input name="amount" placeholder="Amount" onChange={change} required />
        <input name="category" placeholder="Category" onChange={change} required />
        <input type="date" name="date" onChange={change} required />

        <button className="submit-btn">Add Expense</button>
      </form>
    </div>
  );
}
