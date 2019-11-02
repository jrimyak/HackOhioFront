import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/CheckBox'
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container'

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

/**
 * Component for the login page 
 */
class Login extends Component {


    render() {
        const { classes } = this.props;
        return(
            <Container component="main" maxWidth="xs">
                <div>
                    <form className={classes.form} noValidate>
                    <Grid 
                    container
                    alignItems="center"
                    justify="center"
                    direction="column"
                    mx="auto"
                    >
                    <Typography 
                    variant="h4" 
                    align="center" 
                    display='block' 
              gutterBottom>
             Login
             </Typography>
             <TextField xs={12}
              variant="outlined"
              margin="normal"
              label="Email Address"
              required="true"
              id="email"
              autoComplete="email"
              autoFocus 
              fullWidth
             >
             </TextField>
             <TextField xs={12}
              margin="normal"
              label="Password"
              required="true"
              name="password"
              type="password"
              id="password"
              variant="outlined"
             // autoComplete="current-passwrod"
              fullWidth
             >
             </TextField>
             <FormControlLabel 
              control={<Checkbox value="remember" color="primary"  />}
              label="Remember me"
             />    
             <Button
              type="submit"
              color='primary'
              size="medium"
              variant="contained"
              margin="dense" 
              
              >
              Login
              </Button> 
              <Link 
               color="default" 
               underline="hover" 
               href="#" 
               variant="body1">
          
              Forgot password?
              </Link>
              <Link 
               color="default" 
               underline="hover" 
               href="#" 
               variant="body1"
               href='/sign-up'
              >
              {"Don't have an account? Sign Up"}
              </Link>
              </Grid>
                    </form>
                </div>
            </Container>
        )
    }
}

export default withStyles(styles)(Login);