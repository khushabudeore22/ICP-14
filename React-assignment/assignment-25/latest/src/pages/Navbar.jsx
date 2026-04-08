import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    backgroundColor: "#222",
    padding: "15px",
    textAlign: "center"
  };

  const linkStyle = {
    color: "white",
    margin: "15px",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold"
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

export default Navbar;