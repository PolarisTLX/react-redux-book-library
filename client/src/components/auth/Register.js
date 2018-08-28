import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';
// import TextFieldGroup from '../'

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      // way to keep this code DRY so this one function works on ALL the input fields
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    }

    // console.log(newUser);
    axios
      .post('/api/users/register', newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({errors: err.response.data}));
  }

  render() {

    const { errors } = this.state;
    // Same as:
    // const errors = this.state.errors;


    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">
                Create your Book Library CMS account
              </p>
              <form noValidate onSubmit={this.onSubmit}>
                <input
                  className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.name
                  })}
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
                {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                <input
                  className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.email
                  })}
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
                {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                <input
                  className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.password
                  })}
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
                {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                <input
                  className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.password2
                  })}
                  name="password2"
                  type="password"
                  placeholder="Confirm Password"
                  value={this.state.password2}
                  onChange={this.onChange}
                />
                {errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>)}
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register;
