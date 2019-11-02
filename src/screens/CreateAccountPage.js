import React, { Component } from 'react';
import CreateAccount from '../components/CreateAccount';
import Grid from '@material-ui/core/Grid';
class CreateAccountPage extends Component {
    render() {
        return(
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
                   <CreateAccount />
               </Grid>   
               </Grid> 
           </div>
        )
    }
}

export default CreateAccountPage;