import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          <img
            src="/New Logo.png"
            alt="Logo"
            className="navbar-logo"
          />
        </Link>
        
        <div className="navbar-text">
          <p>Prepare atleast 50% faster from crowd</p> 
        </div>

        <div className="nav-buttons">
          <Link to="/courses" className="nav-btn">Exams</Link>
          <Link to="/contact" className="nav-btn">Syllabus</Link>
          <Link to="/contact" className="nav-btn">Contact</Link>
        </div>
      </nav>

      <div className="sale-banner">
        <div className="scroll-text">
          🎉 Sale is Live! Grab your offer now! 🎉 Sale is Live! Grab your offer now! 🎉 Sale is Live!
        </div>
      </div>
    </>
  );
}

export default Navbar;
