import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Login from '../components/Login'
class LoginPage extends Component {
    render() {
        return (
            <div>
             <Grid
                 container
                 spacing={0}
                 direction="column"
                 alignItems="center"
                 justify="center"
                 style={{ minHeight: '100vh' }}
                >
                <Grid item xs={12}>
                    <Login />
                </Grid>   
                </Grid> 
            </div>
        )
    }
}

export default LoginPage;