import { Link, NavLink } from "react-router-dom";
import Container from "./../Container";
import logo from "../assets/Images/logo.png";
import UseAuth from "../Hooks/UseAuth";

const Navbar = () => {
  // =================================================================
  const { user, logOut } = UseAuth();
  // console.log(user);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-cyan-500 font-bold text-white"
              : "bg-transparent text-black"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allContest"
          className={({ isActive }) =>
            isActive
              ? "bg-cyan-500 font-bold text-white"
              : "bg-transparent text-black"
          }
        >
          All Contest
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dummy"
          className={({ isActive }) =>
            isActive
              ? "bg-cyan-500 font-bold text-white"
              : "bg-transparent text-black"
          }
        >
          Leader-board
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "bg-cyan-500 text-white" : "bg-transparent text-black"
          }
        >
          About Us
        </NavLink>
      </li>
    </>
  );
  // =================================================================
  return (
    <Container>
      <div className="navbar bg-base-100 shadow-2xl shadow-cyan-200 mb-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <div className="flex items-center">
              <div className="animate-bounce">
                <img src={logo} className="lg:block hidden" alt="" />
              </div>
              <div>
                <p className="lg:text-xl font-bold text-red-700">
                  Challenge Crafter
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        {user && user.photoURL ? (
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="User avatar" src={user?.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="ml-3">{user?.displayName}</li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <button onClick={logOut}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="navbar-end">
            <Link to="/login">
              <button className="border-2 px-4 hover:bg-slate-600 hover:text-white py-1 bg-slate-200">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Navbar;
