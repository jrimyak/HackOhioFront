import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography'
import { width, maxWidth, height, maxHeight } from '@material-ui/system';
import Grid from '@material-ui/core/Grid'
class Landing extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div style = {{
                backgroundColor: 'black',
                width: maxWidth,
                height: maxHeight
                }}>
                <Grid
                 container
                 spacing={0}
                 direction="column"
                 alignItems="center"
                 justify="center"
                 style={{ minHeight: '100vh' }}
       
                >
                <Grid item xs={12}>

                    <p style = {{color: 'white'}}>welcome to our site</p>
                </Grid> 
         
           </Grid>   
            </div>
        )
    }
}
export default Landing;