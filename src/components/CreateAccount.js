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

class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }


    render() {
        const classes = this.props;
        return(
       
            <Container component="main" maxWidth="xs">
            <div>
                <form className={classes.form} noValidate>
                 <Grid
                  justify="center"
                  alignItems="center"
                  direction="row"
                 >
                    <Typography
                     variant="h4" 
                     align="center" 
                     display='block' 
                     gutterBottom
                    >
                    Create Account
                    </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                 autoComplete="fname"
                                 name="firstName"
                                 variant="outlined"
                                 required
                                 fullWidth
                                 id="firstName"
                                 label="First Name"
                                 autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                 variant="outlined"
                                 required
                                 fullWidth
                                 id="lastName"
                                 label="Last Name"
                                 name="lastName"
                                 autoComplete="lname"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                 variant="outlined"
                                 required
                                 fullWidth
                                 id="email"
                                 label="Email Address"
                                 name="email"
                                 autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                 variant="outlined"
                                 required
                                 fullWidth
                                 name="password"
                                 label="Password"
                                 type="password"
                                 id="password"
                                 autoComplete="current-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                 control={<Checkbox value="allowExtraEmails" color="primary" />}
                                 label="I want to receive updates regarding {App Name}"
                                 color="black"
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} alignItems="center" justify="center">
                            <Button
                             type="submit"
                             //className={classes.submit}
                             color='primary'
                             size="medium"
                             variant="contained"
                             margin="dense"
                            >
                            Sign Up
                            </Button>
                        </Grid>
                        <Grid container spacing={2} justify="flex-end">
                            <Grid item>
                                <Link href='/' variant="body2">
                                Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                     </Grid>
                </form>
            </div>
            </Container>
        )
    }
}

export default CreateAccount;