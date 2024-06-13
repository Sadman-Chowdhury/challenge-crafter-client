import { FaHome, FaUsersCog } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { RiListSettingsLine } from "react-icons/ri";
import { Link, NavLink, Outlet } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import { FaPersonThroughWindow } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";

const Dashboard = () => {
  const { user, logOut } = UseAuth();
  const isAdmin = true;
  const isCreator = false;

  return (
    <>
      <div className="navbar shadow-2xl shadow-slate-300 fixed z-10 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-8 lg:w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm -ml-2 dropdown-content mt-4 lg:mt-6 z-[1] shadow-2xl bg-slate-200 rounded-lg text-black w-52 lg:w-72 h-screen"
            >
              {isAdmin ? (
                <>
                  <NavLink to="/dashboard/adminDashboard">
                    <li className="">
                      <span className="flex items-center">
                        <FaUsersCog />
                        Manage Users
                      </span>
                    </li>
                  </NavLink>
                  <NavLink to="/dashboard/adminDashboard">
                    <li className="">
                      <span className="flex items-center">
                        <RiListSettingsLine />
                        Manage Contest
                      </span>
                    </li>
                  </NavLink>

                  <div className="mt-12 border-b-2 border-black mb-6"></div>
                  <NavLink to="/">
                    <li className="">
                      <span className="flex items-center">
                        <FaHome />
                        Home
                      </span>
                    </li>
                  </NavLink>
                  <NavLink to="/AllContest">
                    <li className="">
                      <span className="flex items-center">
                        <TbTargetArrow />
                        All Contest
                      </span>
                    </li>
                  </NavLink>
                </>
              ) : isCreator ? (
                <>
                  <NavLink to="/AllContest">
                    <li className="">
                      <span className="flex items-center">
                        <TbTargetArrow />
                        Add Contest
                      </span>
                    </li>
                  </NavLink>
                  <NavLink to="/AllContest">
                    <li className="">
                      <span className="flex items-center">
                        <TbTargetArrow />
                        My Created Contest
                      </span>
                    </li>
                  </NavLink>
                  <NavLink to="/AllContest">
                    <li className="">
                      <span className="flex items-center">
                        <TbTargetArrow />
                        Contest Submitted
                      </span>
                    </li>
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink to="/dashboard/userDashboard">
                    <li className="mb-2">
                      <span className=" flex items-center">
                        <TbTargetArrow className="text-xl" />
                        My Participated Contest
                      </span>
                    </li>
                  </NavLink>
                  <NavLink to="/dashboard/userDashboard">
                    <li className="mb-2">
                      <span className=" flex items-center">
                        <FaPersonThroughWindow className="text-xl" />
                        My Winning Contest
                      </span>
                    </li>
                  </NavLink>
                  <NavLink to="/dashboard/userDashboard">
                    <li className="mb-2">
                      <span className=" flex items-center">
                        <ImProfile className="text-xl" />
                        My Profile
                      </span>
                    </li>
                  </NavLink>
                </>
              )}
            </ul>
          </div>
          {/*  */}

          {/*  */}
        </div>
        <div className="flex-1 text-center items-end justify-end gap-2">
          <div className="">
            {user ? (
              " "
            ) : (
              <Link to="/login">
                <button className="border-2 border-lime-500 transition duration-300 ease-in-out hover:border-white hover:text-white hover:bg-lime-300 lg:px-6 py-1">
                  Login
                </button>
              </Link>
            )}
          </div>

          <div className="dropdown dropdown-end">
            {user ? (
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="photo" src={user?.photoURL} />
                </div>
              </div>
            ) : (
              " "
            )}
            <span>
              {isAdmin ? (
                <>
                  <p className="bg-gradient-to-br from-lime-400 to-green-700 text-transparent bg-clip-text font-bold text-[12px] lg:text-2xl">
                    (Admin)
                  </p>
                </>
              ) : isCreator ? (
                <>
                  <p className="bg-gradient-to-br from-lime-400 to-green-700 text-transparent bg-clip-text font-bold text-[12px] lg:text-2xl">
                    (Creator)
                  </p>
                </>
              ) : (
                <>
                  <p className="bg-gradient-to-br from-lime-400 to-green-700 text-transparent bg-clip-text font-bold text-[12px] lg:text-2xl">
                    (User)
                  </p>
                </>
              )}
            </span>
            <ul
              tabIndex={0}
              className=" mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content text-white  rounded-md bg-slate-950 w-52"
            >
              <li>
                <a className="justify-between">
                  {user?.displayName}
                  {isAdmin ? (
                    <span className="badge">Admin</span>
                  ) : (
                    <>
                      <span className="badge">User</span>
                    </>
                  )}
                </a>
              </li>
              {isAdmin ? (
                <li className="hover:text-lime-700">
                  <Link to="/dashboard/adminDashboard">Dashboard</Link>
                </li>
              ) : (
                <li>
                  <Link to="/dashboard/userDashboard">Dashboard</Link>
                </li>
              )}
              <li>
                <a>Settings</a>
              </li>
              {user ? (
                <li>
                  <button onClick={logOut}>Logout</button>
                </li>
              ) : (
                <>
                  <Link to="/login">
                    <li>
                      <button>Login</button>
                    </li>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Dashboard;
