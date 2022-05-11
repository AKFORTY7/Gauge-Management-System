import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import adminAuth from '../../utils/adminAuth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    adminAuth.adminLogout();
  };

  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">Gauge Management System</h1>
          </Link>
          <p className="m-0">Track Gauge Inventory and Borrowing</p>
        </div>

        <div>
          {Auth.loggedIn() ? (
            <>
                          <Link className="btn btn-lg btn-info m-2" to="/me">
              {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
             <Link className="btn btn-lg btn-info m-2" to="login">
                User Login
              </Link>
              <Link className="btn btn-lg btn-info m-2" to="/admin/login">
                Admin Login
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          )}


          {/* The codes below were the original */}
          {/* {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                User Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/admin/login">
                Admin Login
              </Link>
            </>
          )} */}



        </div>
        <div>

          {/* {Auth.loggedIn() ? (
            <>

              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>

              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>

            </>
          )
            :
            (
              <>
                <Link className="btn btn-lg btn-info m-2" to="/login">
                  User Login
                </Link>

                <Link className="btn btn-lg btn-info m-2" to="/admin/login">
                  Admin Login
                </Link>
                <button className="btn btn-lg btn-light m-2" onClick={logout}>
                  Logout
                </button>
                {adminAuth.adminLoggedIn() ? (<> <Link className="btn btn-lg btn-info m-2" to="/me">
                  {Auth.getProfile().data.adminName}'s profile
                </Link></>)
                  :
                  (
                    <>
            
                    </>
                  )
                }
              </>
            )
          } */}





        </div>
      </div>
    </header >
  );
};

export default Header;
