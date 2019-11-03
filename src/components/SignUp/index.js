import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';


const SignUpPage = () => {
    <div>
        <h1>SignUp</h1>
        <SignUpForm />
    </div>
}

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    birthday: Date,
    city: '',
    state: '',
    error: null,
  };

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state={INITIAL_STATE}
    }

    onSubmit = event => {
      const { username, email, passwordOne, birthday, city, state } = this.state;
      this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            birthday,
            city,
            state,
            error,
          } = this.state;

          const isInvalid =
          passwordOne !== passwordTwo ||
          passwordOne === '' ||
          email === '' ||
          username === '' || city === '' || state === '';
        return(
            <form onSubmit={this.onSubmit}>
                <input 
                name="username"
                value={username}
                onChange={this.onChange}
                type="text"
                placeholder="Full Name"
                />
                <input 
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="Email"
                />
                <input 
                name="passwordOne"
                value={passwordOne}
                onChange={this.onChange}
                type="password"
                placeholder="Password"
                />
                <input 
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.onChange}
                type="password"
                placeholder="Confirm Password"
                />

                <input 
                name="birthday"
                value={birthday}
                onChange={this.onChange}
                type="date"
                placeholder="Birthday"
                />

                <input 
                name="city"
                value={city}
                onChange={this.onChange}
                type="text"
                placeholder="City"
                />

                <input 
                name="state"
                value={state}
                onChange={this.onChange}
                type="text"
                placeholder="State"
                />
                <button disabled={isInvalid} type="submit">Sign Up</button>
                {error && <p>{error.message}</p>}
            </form>
        )
    }
}

const SignUpForm = compose(
    withRouter,
    withFirebase,
  )(SignUpFormBase);

export default SignUpPage;
export { SignUpForm, SignUpLink };

const SignUpLink = () => {
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
}