import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
/**
 * useStyles function uses the Material-UI styling 
 */
const styles = {
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    Typography: {
      width: '100%',
      maxWidth: 500,
    },
};

const SignInPage = () => (
    <div>
        <Typography align='center' justify='center' variant='h4'>Sign In</Typography>
        <SignInForm /> 
        <PasswordForgetLink />
        <SignUpLink />
    </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,

};

class SignInFormBase extends Component{
    constructor(props)
    {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({...INITIAL_STATE});
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({error});
            });

        event.preventDefault();
    };
    onChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    render()
    {
        const{email, password, error} = this.state;
        const isInvalid = password === '' || email === '';
        const { classes } = this.props
        return(
            <Container component="main" maxWidth="xs">
            <div>
            <form onSubmit = {this.onSubmit}>
             {/*
                <input
                    name = "email"
                    value = {email}
                    onChange = {this.onChange}
                   type='text'
                    placeholder = "Email Address"
                />
             */}

                <TextField xs={12}
              variant="outlined"
              margin="normal"
              label="Email Address"
              required="true"
              id="email"
              autoComplete="email"
              autoFocus 
              fullWidth
              name = "email"
              type = "text"
              value = {email}
              onChange={this.onChange}
             >
            </TextField>

            <TextField xs={12}
              margin="normal"
              label="Password"
              required="true"
              name="password"
              value={password}
              type="password"
              id="password"
              variant="outlined"
              onChange={this.onChange}
             // autoComplete="current-passwrod"
              fullWidth
             >
             </TextField>
            {/*
                <input
                    name = "password"
                    value = {password}
                    onChange = {this.onChange}
                    type = "password"
                    placeholder = "Password"
                /> 
            */}
            <Button color='primary' disabled = {isInvalid} type = "submit" alignItems = 'center' justify='center'>
               {/* <button disabled = {isInvalid} type = "submit" style={{opacity: 0, textAlign: 'center', justify: 'center'}}>
                    
        </button>*/}
                Sign In
                </Button>

                {error && <p> {error.message}</p>}
            </form>
            </div>
            </Container>
        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
    )(SignInFormBase);

    export default withStyles(styles)(SignInPage);

    export {SignInForm};