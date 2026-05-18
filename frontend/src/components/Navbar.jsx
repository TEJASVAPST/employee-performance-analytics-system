import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "20px",
      }}
    >

      <Link to="/">Home</Link>

      <Link to="/login">Login</Link>

      <Link to="/signup">Signup</Link>

    </nav>
  );
}

export default Navbar;