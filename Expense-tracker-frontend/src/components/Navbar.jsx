import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">E</div>
        <div className="nav-title">Expense Tracker</div>
      </div>

      <div className="nav-right">
        <Link to="/expense-tracker-frontend/" className="btn-nav home-btn">Home</Link>
        <Link to="/add" className="btn-nav add-btn">+ Add Expense</Link>

        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}
