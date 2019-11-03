import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
/**
 * useStyles function uses the Material-UI styling 
 */
const styles = {
  root: {
    padding: '2px 6px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  Typography: {
    width: '100%',
    maxWidth: 500,
  },
};



const SignUpPage = () => (
  <Grid
  container
   justify='center'
   alignContent='center'
   style={{minHeight: '90vh'}}>
  <div>
    <Typography align='center' justify='center' variant='h4'>Sign Up</Typography>
    <SignUpForm />
  </div>
  </Grid>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  dateOfBirth: Date,
  city: '',
  state: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne, dateOfBirth, city, state } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
            passwordOne,
            dateOfBirth,
            city,
            state
          })
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.HOME);
          })
          .catch(error => {
            this.setState({ error });
          });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      dateOfBirth,
      city,
      state,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '' || state === '' || city === '';

    return (
      <Container component="main" maxWidth="xs">
      <form onSubmit={this.onSubmit}>

        <TextField       
          value={username}
          onChange={this.onChange}
          name="username"
          variant="outlined"
          required
          fullWidth
          id="username"
          type='text'
          label="Full Name"
          autoFocus
          style={{marginTop: '10px'}}
        />
        
        <TextField
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          variant="outlined"
          required
          fullWidth
          id="email"
          label="Email"
          style={{marginTop: '10px'}}
        />
        <TextField
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          variant="outlined"
          required
          fullWidth
          id="passwordOne"
          label="Password"
          style={{marginTop: '10px'}}
        />
        <TextField
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          variant="outlined"
          required
          fullWidth
          id="passwordTwo"
          label="Confirm Password"
          style={{marginTop: '10px'}}
        />
       <TextField
          name="dateOfBirth"
          value={dateOfBirth}
          onChange={this.onChange}
          type="date"
          variant="outlined"
          required
          fullWidth
          id="dateOfBirth"
          label="Birthday"
          InputLabelProps={{
            shrink: true,
          }}
       //   label="Date Of Birth"
       style={{marginTop: '10px'}}
        />
         <TextField
          name="city"
          value={city}
          onChange={this.onChange}
          type="text"
          variant="outlined"
          required
          fullWidth
          id="city"
          label="City"
          style={{marginTop: '10px'}}
        />
         <TextField
          name="state"
          value={state}
          onChange={this.onChange}
          type="text"
          variant="outlined"
          required
          fullWidth
          id="state"
          label="State"
          style={{marginTop: '10px'}}
        />

        <p style={{textAlign: 'center'}}>
         <Button color='primary' disabled = {isInvalid} type="submit"
              color='primary'
              size="medium"
              variant="contained"
              margin="dense" >
               {/* <button disabled = {isInvalid} type = "submit" style={{opacity: 0, textAlign: 'center', justify: 'center'}}>
                    
        </button>*/}
                Sign Up
                </Button>
                </p>

        {error && <p>{error.message}</p>}
      </form>
      </Container>
    );
  }
}

const SignUpLink = () => (
  <Typography style={{textAlign: 'center'}}>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </Typography>
);
const SignUpForm = withRouter(withFirebase(SignUpFormBase));
export default withStyles(styles)(SignUpPage);
export { SignUpForm, SignUpLink };