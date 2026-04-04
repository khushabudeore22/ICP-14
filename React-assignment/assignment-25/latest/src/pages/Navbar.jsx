import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    padding: "15px",
    backgroundColor: "#222",
    textAlign: "center"
  };

  const linkStyle = {
    color: "white",
    margin: "15px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "18px"
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