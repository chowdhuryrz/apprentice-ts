import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between p-5">
      <div>
        <Link to="/" className="font-semibold">
          Apprentice
        </Link>
      </div>
      <div className="flex gap-5">
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/discover">Discover</Link>
        <Link to="/portfolio">Portfolio</Link>
      </div>
    </div>
  );
};
export default Navbar;
