import { Link } from "react-router-dom";

function Navbar(){
  return(
    <nav>
      <button className="hamburger" id="hamburger">
        =
      </button>
      <ul id="navMenu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
  </nav>
  );
}
  
export default Navbar;