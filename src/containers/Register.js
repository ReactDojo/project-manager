import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import './Register.css';

class Register extends Component {
  render() {
    return (
      <div className="login-container">
        <NavBar />
        <div className="page-container">

          <div className="page-content">

            <div className="content-wrapper">

              <form action="index.html">
                <div className="panel panel-body login-form">
                  <div className="text-center">
                    <div className="icon-object border-success text-success"><i className="icon-plus3"></i></div>
                    <h5 className="content-group">Create account <small className="display-block">All fields are required</small></h5>
                  </div>

                  <div className="content-divider text-muted form-group"><span>Your credentials</span></div>

                  <div className="form-group has-feedback has-feedback-left">
                    <input type="text" className="form-control" placeholder="Eugene" />
                    <div className="form-control-feedback">
                      <i className="icon-user-check text-muted"></i>
                    </div>
                    <span className="help-block text-danger"><i className="icon-cancel-circle2 position-left"></i> This username is already taken</span>
                  </div>

                  <div className="form-group has-feedback has-feedback-left">
                    <input type="password" className="form-control" placeholder="Create password" />
                    <div className="form-control-feedback">
                      <i className="icon-user-lock text-muted"></i>
                    </div>
                  </div>

                  <div className="content-divider text-muted form-group"><span>Your privacy</span></div>

                  <div className="form-group has-feedback has-feedback-left">
                    <input type="text" className="form-control" placeholder="Your email" />
                    <div className="form-control-feedback">
                      <i className="icon-mention text-muted"></i>
                    </div>
                  </div>

                  <div className="form-group has-feedback has-feedback-left">
                    <input type="text" className="form-control" placeholder="Repeat email" />
                    <div className="form-control-feedback">
                      <i className="icon-mention text-muted"></i>
                    </div>
                  </div>

                  <div className="content-divider text-muted form-group"><span>Additions</span></div>

                  <div className="form-group">
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" className="styled" checked="checked" />
                        Send me <a href="#">test account settings</a>
                      </label>
                    </div>

                    <div className="checkbox">
                      <label>
                        <input type="checkbox" className="styled" checked="checked" />
                        Subscribe to monthly newsletter
								      </label>
                    </div>

                    <div className="checkbox">
                      <label>
                        <input type="checkbox" className="styled" />
                        Accept <a href="#">terms of service</a>
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="btn bg-teal btn-block btn-lg">Register <i className="icon-circle-right2 position-right"></i></button>
                </div>
              </form>

            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default Register;
