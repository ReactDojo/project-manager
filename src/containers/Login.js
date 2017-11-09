import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <NavBar />
        <div className="page-container">
          <div className="page-content">
            <div className="content-wrapper">
              <form action="index.html">
                <div class="panel panel-body login-form">
                  <div class="text-center">
                    <div class="icon-object border-slate-300 text-slate-300"><i class="icon-reading"></i></div>
                    <h5 class="content-group">Login to your account <small class="display-block">Enter your credentials below</small></h5>
                  </div>

                  <div class="form-group has-feedback has-feedback-left">
                    <input type="text" class="form-control" placeholder="Username" />
                    <div class="form-control-feedback">
                      <i class="icon-user text-muted"></i>
                    </div>
                  </div>

                  <div class="form-group has-feedback has-feedback-left">
                    <input type="password" class="form-control" placeholder="Password" />
                    <div class="form-control-feedback">
                      <i class="icon-lock2 text-muted"></i>
                    </div>
                  </div>

                  <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-block">Sign in <i class="icon-circle-right2 position-right"></i></button>
                  </div>

                  <div class="text-center">
                    <Link to="/forgotpassword">Forgot password?</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
