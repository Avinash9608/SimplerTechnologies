import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Simpler Technologies</div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
