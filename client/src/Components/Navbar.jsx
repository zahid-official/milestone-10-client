import { Link, NavLink } from "react-router-dom";
import logo from "/assets/2.logo.svg";

const Navbar = () => {
  const links = (
    <>
      <li className="text-lg font-bold custom-effect-nav">
        <NavLink to={"/"} className={"z-10 hover:text-white"}>
          <span>Home</span>
        </NavLink>
      </li>
      <li className="text-lg font-bold custom-effect-nav">
        <NavLink to={"/allVisas"} className={"z-10 hover:text-white"}>
          <span>All Visas</span>
        </NavLink>
      </li>
      <li className="text-lg font-bold custom-effect-nav">
        <NavLink to={"/addVisa"} className={"z-10 hover:text-white"}>
          <span>Add Visa</span>
        </NavLink>
      </li>
      <li className="text-lg font-bold custom-effect-nav">
        <NavLink to={"/myApplications"} className={"z-10 hover:text-white"}>
          <span>My Applications</span>
        </NavLink>
      </li>

      <div className="divider divider-start sm:hidden m-0"></div>

      <li className="text-lg font-bold sm:hidden custom-effect-nav">
        <NavLink to={"/login"} className={"z-10 hover:text-white"}>
          {" "}
          <span>Login</span>
        </NavLink>
      </li>
      <li className="text-lg font-bold sm:hidden custom-effect-nav">
        <NavLink to={"/register"} className={"z-10 hover:text-white"}>
          {" "}
          <span>Register</span>Register
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar sm:w-11/12 mx-auto py-6 px-3 bg-base-100">
        <div className="navbar-start">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
        </div>

        <div className="navbar-end gap-2">
          <div className="sm:flex gap-2.5  hidden">
            <Link to={"/login"}>
              <button className="btn hover:bg-[#45a735] text-lg bold custom-effect">
                <span className="z-10">Login</span>
              </button>
            </Link>

            <Link to={"/register"}>
              <button className="btn hover:bg-[#45a735] text-lg font-bold custom-effect">
                <span className="z-10">Register</span>
              </button>
            </Link>
          </div>

          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="z-20 right-2 py-4 menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow gap-2"
            >
              {links}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
