import React, { Component } from 'react';
import 'whatwg-fetch';

import {
  getFromStorage,
  setInStorage
} from '../utils/storage';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      // if they are signed in there is a token:
      token: '',
      signUpError: '',
      signInError: '',
      signInemail: '',
      signInPassword: '',
      signUpName: '',
      signUpEmail: '',
      signUpPassword: '',
      signUpPassword2: ''
    };

    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
    this.onTextboxChangeSignUpPassword2 = this.onTextboxChangeSignUpPassword2.bind(this);
    this.onTextboxChangeSignUpName = this.onTextboxChangeSignUpName.bind(this);

    this.onSignIn = this.onSignIn.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
    this.logout = this.logout.bind(this);
  }

  //  on page load, fetch request to check for token on local storage (they logged in)
  // if logged in, then verify token
  componentDidMount() {
    const obj = getFromStorage('the_main_app');
    if (obj && obj.token) {
      const { token } = obj;
      // verify the token:
      fetch('/api/account/verify?token=' + token)
        .then(res => res.json())
        .then(json => {
        if (json.success) {
          this.setState({
            token,
            isLoading: false,
          });
        } else {
          this.setState({
            isLoading: false
          });
        }
        });
    } else {  //there is no token
      this.setState({
        isLoading: false,
      });
    }
  }

  onTextboxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value
    });
  }
  onTextboxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value
    });
  }
  onTextboxChangeSignUpName(event) {
    this.setState({
      signUpName: event.target.value
    });
  }
  onTextboxChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value
    });
  }
  onTextboxChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value
    });
  }
  onTextboxChangeSignUpPassword2(event) {
    this.setState({
      signUpPassword2: event.target.value
    });
  }

  onSignIn() {
    // Grab state
    const {
      signInEmail,
      signInPassword,
    } = this.state;

    this.setState({
      isLoading: true,
    });

    // Post request to backend
    fetch('/api/account/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    }).then(res => res.json())
      .then(json => {
        console.log('json', json);
        if (json.success) {
          //  set the token, save it locally, save it to the state, refresh the page:
          setInStorage('the_main_app', { token: json.token });
          this.setState({
            signInError: json.message,
            isLoading: false,
            // clear all textboxes:
            signInEmail: '',
            signInPassword: '',
            token: json.token,
          });
        } else {
          this.setState({
            signInError: json.message,
            isLoading: false,
          });
        }
     });

  }

  onSignUp() {
    // Grab state
    const {
      signUpName,
      signUpEmail,
      signUpPassword,
      signUpPassword2,
    } = this.state;

    this.setState({
      isLoading: true,
    });

    // Post request to backend
    fetch('/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: signUpName,
        email: signUpEmail,
        password: signUpPassword,
        password2: signUpPassword2,
      }),
    }).then(res => res.json())
      .then(json => {
        console.log('json', json);
        if (json.success) {
          this.setState({
            signUpError: json.message,
            isLoading: false,
            // clear all textboxes:
            signUpName: '',
            signUpEmail: '',
            signUpPassword: '',
            signUpPassword2: '',
          });
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false,
          });
        }
     });

  }

  logout() {
      this.setState({
        isLoading: true,
      });
      const obj = getFromStorage('the_main_app');
      if (obj && obj.token) {
        const { token } = obj;
        // verify the token:
        fetch('/api/account/logout?token=' + token)
          .then(res => res.json())
          .then(json => {
          if (json.success) {
            this.setState({
              token: '',
              isLoading: false,
            });
          } else {
            this.setState({
              isLoading: false
            });
          }
          });
      } else {  //there is no token
        this.setState({
          isLoading: false,
        });
      }

  }





  render() {
    const {
      isLoading,
      token,
      signInError,
      signInEmail,
      signInPassword,
      signUpError,
      signUpName,
      signUpEmail,
      signUpPassword,
      signUpPassword2,
    } = this.state;

    if (isLoading) {
      return (<div><p>Loading...</p></div>);
    }

    if (!token) {
      return (
        <div>
          <div>
            {/*If there is a sign in error, show it, otherwise return null, to not show anything*/}
            {
              (signInError) ? (
                <p>{signInError}</p>
              ) : null
            }
            <p>Sign In</p>
            <input
              type="email"
              placeholder="Email"
              value={signInEmail}
              onChange={this.onTextboxChangeSignInEmail}
            /><br/>
            <input
              type="password"
              placeholder="Password" value={signInPassword}
              onChange={this.onTextboxChangeSignInPassword}
            /><br/>
            <button onClick={this.onSignIn}>Sign In</button>
          </div>
          <br/>
          <br/>
          <div>
            {/*If there is a sign up error, show it, otherwise return null, to not show anything*/}
            {
              (signUpError) ? (
                <p>{signUpError}</p>
              ) : null
            }
            <p>Sign Up</p>
            <input
              type="text"
              placeholder="Name"
              value={signUpName}
              onChange={this.onTextboxChangeSignUpName}
            /><br/>
            <input
              type="email"
              placeholder="Email"
              value={signUpEmail}
              onChange={this.onTextboxChangeSignUpEmail}
            /><br/>
            <input
              type="password"
              placeholder="Password" value={signUpPassword}
              onChange={this.onTextboxChangeSignUpPassword}
            /><br/>
            <input
              type="password"
              placeholder="Confirm Password" value={signUpPassword2}
              onChange={this.onTextboxChangeSignUpPassword2}
            /><br/>
            <button onClick={this.onSignUp}>Sign Up</button>
          </div>

        </div>
      );
    }

    return (
      <div>
        <p>Account</p>
        <button onClick={this.logout}>Logout</button>
      </div>
    );

  }

}

export default Home
