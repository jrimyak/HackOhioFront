import React from 'react';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';
import { AuthUserContext } from '../Session';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
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

const AccountPage = () => (
  <div>
  <Grid
    container
     justify='center'
     alignContent='center'
     style={{minHeight: '90vh'}}>
    <div>
        <Typography align='center' justify='center' variant='h4'>Sign In</Typography>
    </div>
    </Grid>
    <AuthUserContext.Consumer>
    {authUser => (
  <div>
      
    <h1>Account: {authUser.email}</h1>
    <PasswordForgetForm />
    <PasswordChangeForm />
    </div>
   )}
   </AuthUserContext.Consumer>
   </div>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);