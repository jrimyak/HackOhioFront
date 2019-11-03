import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Jake from '../assests/img/lll.jpeg'
class Welcome extends Component {
    render() {
        return(
            <Grid xs = {12} container direction = 'row' justify = 'space-evenly' style = {{width: '100vw', marginTop: '10vh'}}>
          <div style = {{textAlign: 'left'}}>
          <Typography
            color="textSecondary"
            variant="h2" 
            gutterBottom
            style = {{fontWeight: '700',marginTop: '15vh', width: '30vw', textAlign: 'left'}}
              > 
            Hack Ohio 2019 Projecgt 
          </Typography>
    
            </div>
            <img 
              src={Jake}
              alt="Mockup"
              style={{
              width: '60vh',
              }}        
              />
            </Grid>
        )
    }
}

export default Welcome 