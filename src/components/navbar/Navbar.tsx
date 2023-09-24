import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between p-5">
      <div>
        <Link to="/">Apprentice</Link>
      </div>
      <div className="flex gap-5">
        <Link to="/discover">Discover</Link>
        <Link to="/signin">Signin</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
};
export default Navbar;
