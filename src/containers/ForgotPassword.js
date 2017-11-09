import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import './ForgotPassword.css';

class ForgotPassword extends Component {
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
                    <div class="icon-object border-warning text-warning"><i class="icon-spinner11"></i></div>
                    <h5 class="content-group">Password recovery <small class="display-block">We'll send you instructions in email</small></h5>
                  </div>

                  <div class="form-group has-feedback">
                    <input type="email" class="form-control" placeholder="Your email" />
                    <div class="form-control-feedback">
                      <i class="icon-mail5 text-muted"></i>
                    </div>
                  </div>

                  <button type="submit" class="btn bg-blue btn-block">Reset password <i class="icon-arrow-right14 position-right"></i></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
