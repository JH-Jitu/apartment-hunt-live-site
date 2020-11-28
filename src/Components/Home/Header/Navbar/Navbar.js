import React, { useContext } from 'react';
import './Navbar.css';
import menu from '../../../../images/menu.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { handleSignOut, isLoggedIn, loggedInInfo } from '../../../Login/loginManager';



const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
      // is logged in
  const isLogged = isLoggedIn();

  // Handle sign out button
  const signOut = () => {
    setLoggedInUser({});
    sessionStorage.removeItem('token');
  };

  const loggedUser = loggedInInfo()
  
    return (
        <div className="container mb-2">
            <nav className="navbar navbar-expand-lg  nav-font">
                <button className="navbar-toggler bgMenu w-40 bg-dark btn btn-dark p-2 pl-3 pr-3 ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    Menu <img style={{ width: "25px" }} src={menu} alt="" />
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <Link to="/admin_user"> <button style={{ backgroundColor: "#111430", textDecoration: "none", color: "white" }} className="nav-item btn px-4 h-75 bg-dark btn-dark">
                            Admin/User Panel
                        </button></Link>
                        <Link style={{ textDecoration: 'none' }} to="/home"><li className="nav-item active mr-3 p-1">
                            <p className="nav-link text-dark">Home <span className="sr-only">(current)</span></p>
                        </li></Link>
                        <li className="nav-item mr-3 p-1">
                            <a className="nav-link text-dark" href="#carousel">Our Portfolio</a>
                        </li>
                        <li className="nav-item mr-3 p-1">
                            <a className="nav-link text-dark" href="#service">Our Service</a>
                        </li>
                        <li className="nav-item mr-3 p-1">
                            <a className="nav-link text-dark" href="#review">Review</a>
                        </li>
                        <li className="nav-item mr-3 p-1">
                            <a className="nav-link text-dark" href="#footer">Contact Us</a>
                        </li>
                        {
                loggedInUser.email || isLogged ? <button style={{ backgroundColor: "#111430", textDecoration: "none", color: "white" }} className="nav-item btn px-4 h-75 bg-dark btn-dark" onClick={signOut}>Sign Out, {loggedInUser.name || loggedUser.name ? loggedInUser.name || loggedUser.name : loggedInUser.displayName || loggedUser.displayName}</button> :
                  <Link to="/login"><button style={{ backgroundColor: "#111430", textDecoration: "none", color: "white" }} className="nav-item btn px-4 h-75 bg-dark btn-dark">Sign In</button></Link>
              }
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;