import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import AddIcon from '@material-ui/icons/Add';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RateReviewIcon from '@material-ui/icons/RateReview';
import logo from '../../images/logos/logo.png';
import './Dashboard.css';
import { UserContext } from '../../App';

// Material UI elements
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [admin, setAdmin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(`https://nameless-fortress-40927.herokuapp.com/findAdmin/${loggedInUser.email}`)
      .then(res => res.json())
      .then(data => {
        setAdmin(data);
        // setRedirect(true)
      })
  }, [loggedInUser.email]);

  return (

    <div>
      <div className="d-flex justify-content-center"> <Link to="/">
        <img style={{ width: "140px" }} src={logo} alt="" /></Link>
      </div>
      <div className="text-center">
        <small>Click on icon to go Home</small>
      </div>
      {/* Admin Panel */}

      { admin ? <admin className="d-flex justify-content-center">
        <div className="mt-3 p-2">
          <List className={`${classes.root}`}>
            <Link style={{ textDecoration: "none" }} to="/adminControl">
              <div className="btn d-flex justify-content-start btnDashboard">
                <RoomServiceIcon></RoomServiceIcon>
                <p className="ml-2">Booking List</p>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/adminAddService">
              <div className="btn d-flex justify-content-start btnDashboard">
                <AddIcon></AddIcon>
                <p className="ml-2">Add Rent House</p>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/adminMaker">
              <div className="btn d-flex justify-content-start btnDashboard">
                <PersonAddIcon></PersonAddIcon>
                <p className="ml-2">Make Admin</p>
              </div>
            </Link>
          </List>
        </div>
      </admin> :


        <user className="d-flex justify-content-center">
          <div className="mt-3 p-2">
            <List className={classes.root}>
              <Link style={{ textDecoration: "none" }} to="/orderService">
                <div className="btn d-flex justify-content-start btnDashboard">
                  <ShoppingCartIcon></ShoppingCartIcon>
                  <p className="ml-2">Order for Custom House</p>
                </div>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/userService">
                <div className="btn d-flex justify-content-start btnDashboard">
                  <RoomServiceIcon></RoomServiceIcon>
                  <p className="ml-2">My Rent</p>
                </div>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/userReview">
                <div className="btn d-flex justify-content-start btnDashboard">
                  <RateReviewIcon></RateReviewIcon>
                  <p className="ml-2">Review</p>
                </div>
              </Link>
            </List>
          </div>
        </user>}

    </div>
  );
};

export default Dashboard;