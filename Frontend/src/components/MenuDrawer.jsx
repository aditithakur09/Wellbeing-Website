import { Link, useNavigate } from "react-router-dom";
import { LogIn, LogOut } from "lucide-react";
import styles from "./MenuDrawer.module.css";

function MenuDrawer({ isOpen, setIsOpen, onLoginClick }) {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  if (!isOpen) return null;

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      localStorage.removeItem("token");
      setIsOpen(false);
      navigate("/");
    }
  };

  const handleLoginClick = () => {
    setIsOpen(false);
    onLoginClick(); // Navbar wala modal open hoga
  };

  // ✅ Generate Report click pe login check
  const handleGenerateReport = () => {
    setIsOpen(false);
    const token = localStorage.getItem("token");
    if (!token || token === "undefined" || token === "null") {
      onLoginClick(); // Login modal khulega
    } else {
      navigate("/report");
    }
  };

  return (
    <div className={styles.drawer}>
      <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
        ✖
      </button>

      <div className={styles.links}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>

        {/* ✅ Generate Report - login check ke saath */}
        <button className={styles.linkBtn} onClick={handleGenerateReport}>
          Generate Report
        </button>

        <Link to="/body-composition" onClick={() => setIsOpen(false)}>Body Composition</Link>
        <Link to="/fat-analysis" onClick={() => setIsOpen(false)}>Fat Analysis</Link>
        <Link to="/metabolic-indicators" onClick={() => setIsOpen(false)}>Metabolic Indicators</Link>
        <Link to="/weight-analysis" onClick={() => setIsOpen(false)}>Weight Analysis</Link>
        <Link to="/exercises" onClick={() => setIsOpen(false)}>Fitness Exercises</Link>
        <Link to="/diet" onClick={() => setIsOpen(false)}>Balanced Diet & High Protein Foods</Link>

        {/* ✅ Login ya Logout */}
        {isLoggedIn ? (
          <button className={styles.logoutBtn} onClick={handleLogout}>
            <LogOut size={18} /> Logout
          </button>
        ) : (
          <button className={styles.logoutBtn} onClick={handleLoginClick}>
            <LogIn size={18} /> Login
          </button>
        )}
      </div>
    </div>
  );
}

export default MenuDrawer;