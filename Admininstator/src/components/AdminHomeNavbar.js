import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

const token = "123";

const AdminHomeNavbar = () => {
  return (
    <div>
      <Navbar className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container">
          <Link className="navbar-brand" to={token ? "/adminhome" : "/"}>
            HyperLedger
          </Link>
          {token && (
            <>
              <Link className="nav-link" to="/createcompany">
                Add New Company
              </Link>
              <Link className="nav-link" to="/adminhome">
                View Company
              </Link>
            </>
          )}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              {!token && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/sign-up">
                      Sign up
                    </Link>
                  </li>
                </>
              )}
              {token && (
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default AdminHomeNavbar;
