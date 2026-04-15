import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar animate-fade-in">
      <h2>Task Manager</h2>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>Home</NavLink>
        <NavLink to="/add" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>Add Task</NavLink>
        <NavLink to="/view" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>View Tasks</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;