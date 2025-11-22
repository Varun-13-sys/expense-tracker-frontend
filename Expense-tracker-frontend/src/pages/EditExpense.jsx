import { useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

export default function EditExpense() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [expense, setExpense] = useState({});

  const load = async () => {
    const res = await api.get(`/${id}`);
    setExpense(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  const change = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const update = async (e) => {
    e.preventDefault();
    await api.put(`/${id}`, expense);
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Edit Expense</h2>

      <form onSubmit={update}>
        <input name="title" value={expense.title || ""} onChange={change} />
        <input name="amount" value={expense.amount || ""} onChange={change} />
        <input name="category" value={expense.category || ""} onChange={change} />
        <input type="date" name="date" value={expense.date || ""} onChange={change} />

        <button className="submit-btn">Save</button>
      </form>
    </div>
  );
}
