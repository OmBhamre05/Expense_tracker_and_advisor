import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">🏠 Home</Link></li>
        <li><Link to="/savings">💰 Savings</Link></li>
        <li><Link to="/investments">📈 Investments</Link></li>
        <li><Link to="/wishlist">🎁 Wishlist</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
