import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="navbar navbar-inverse">
        <div className="navbar-header">
          <a className="navbar-brand" href="index.html"><img src="template/assets/images/logo_light.png" alt="" /></a>

          <ul className="nav navbar-nav pull-right visible-xs-block">
            <li><a data-toggle="collapse" data-target="#navbar-mobile"><i className="icon-tree5"></i></a></li>
          </ul>
        </div>

        <div className="navbar-collapse collapse" id="navbar-mobile">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/login">
                <i className="icon-switch2"></i> <span className="visible-xs-inline-block position-right"> Login</span>
              </Link>
            </li>

            <li>
              <Link to="/register">
                <i className="icon-user-tie"></i> <span className="visible-xs-inline-block position-right"> Register</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;