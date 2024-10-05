import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../providers/AuthProvider";


const NavBar = () => {

    const { user, logOut } = useContext(authContext)

    const navLink = <>
        <li> <Link to='/'> Home </Link> </li>
        <li> <Link to='/assignments'> Assignments </Link> </li>
        <li> <Link to='/createAssignment'> Create Assignment </Link> </li>
        <li> <Link to='/pendingAssignments'> Pending Assignments </Link> </li>
    </>

    const handleLogOut = e =>{
        logOut()
        .then(() => {
            // Sign-out successful.
          }).catch((error) => {
            console.log(error);
            // An error happened.
          });
    }

    return (
        <div className="bg-base-200">
            <div className="navbar max-w-screen-2xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLink}
                            {/* <li> <Link to='/assignments'> Assignments </Link> </li>
                            <li> <Link to='/createAssignment'> Create Assignment </Link> </li>
                            <li> <Link to='/pendingAssignments'> Pending Assignments </Link> </li> */}

                        </ul>
                    </div>
                    <Link to='/' className="text-2xl font-bold">SolveIt </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                        {/* <li> <Link to='/assignments'> Assignments </Link> </li>
                        <li> <Link to='/createAssignment'> Create Assignment </Link> </li>
                        <li> <Link to='/pendingAssignments'> Pending Assignments </Link> </li> */}

                    </ul>
                </div>
                <div className="navbar-end ">

                    {
                        user ? <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li onClick={handleLogOut}><a>Logout</a></li>
                            </ul>
                        </div> : <div className="">
                            <Link to='/login' className="btn btn-outline mr-1"> Log in </Link>
                            <Link to='/register' className="btn btn-outline"> Register </Link>
                        </div>

                    }

                </div>
            </div>

        </div>
    );
};

export default NavBar;