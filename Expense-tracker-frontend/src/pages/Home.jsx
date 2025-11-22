import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Link } from "react-router-dom";

export default function Home() {
  const [expenses, setExpenses] = useState([]);

  const load = async () => {
    const res = await api.get("");   // Get all expenses
    setExpenses(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  // DELETE FUNCTION
  const remove = async (id) => {
    if (!window.confirm("Are you sure you want to delete this expense?")) return;

    await api.delete(`/${id}`); // delete request
    load();                       // refresh list after delete
  };

  return (
    <div className="container">
      <h2>Your Expenses</h2>

      <div className="grid">
        {expenses.map((e) => (
          <div className="card" key={e.id}>
            <div className="card-title">{e.title}</div>
            <div className="card-amount">₹{e.amount}</div>
            <div>Category: {e.category}</div>
            <div>Date: {e.date}</div>

            <div className="card-actions">
              <Link to={`/edit/${e.id}`} className="btn-edit">Edit</Link>
              <button className="btn-delete" onClick={() => remove(e.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
