import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/styles/withStyles'
import QuadVarsityLogo from '../assets/QuadVarsityLogo.png';

import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline'
/**
 * @summary right aligns the buttons 
 * @param {*} theme The theme of the website and applying that to various styling attributes
 */
const styles = theme => ({ 
    toolbarButtons: {
        marginLeft: "auto",
        marginRight: -12,
        marginTop: "auto",
        marginBottom: "auto"
      },
})

class NavigationBar extends Component {
    render() {
        const classes = this.props;
        return(
         
                <CssBaseline>
                <div>
            <AppBar position='fixed' style={{ background: 'transparent', boxShadow: 'none'}}  >
                       <Toolbar>
                           <Grid
                           justify="space-between"
                           container
                           spacing={24}>
                               <Link to='/' style={{ textDecoration: 'none' }}>
                                <img 
                                src={QuadVarsityLogo} 
                                alt="Quad Logo" 
                                height={70} 
                                width={70} 
                                />
                                </Link>
                                <span className={classes.toolbarButtons}>                      
                                    <Link 
                                    to='/orgAdmin' 
                                    style={{ textDecoration: 'none' }}>
                                <Button
                                type="submit"
                                to="/orgAdmin"
                                color='primary'
                               style={{ background: 'transparent', boxShadow: 'none'}}
                                size="small"
                                variant="contained"
                                margin="dense"
                                >
                                    Dashboard 
                                </Button>
    
                                    </Link>
                                    <Link 
                                   to='/organizations'
                                   style={{ textDecoration: 'none' }}
                                  >
                               <Button
                               type="submit"
                               to='/organizations'
                               color='primary'
                              style={{ background: 'transparent', boxShadow: 'none'}}
                               size="small"
                               variant="contained"
                               margin="dense"
                               >
                                   Organizations 
                               </Button>
    
                                   </Link>
                                   <Link 
                                   to='/login'
                                   style={{ textDecoration: 'none' }}
                                  >
                               <Button
                               type="submit"
                               to='/login'
                               color='primary'
                               style={{ background: 'transparent', boxShadow: 'none'}}
                               size="small"
                               variant="contained"
                               margin="dense"
                               >
                                   Login 
                               </Button>
    
                                   </Link>
                                </span>
                           </Grid>
                        </Toolbar> 
                    </AppBar>
                </div>     
                </CssBaseline>  
        )
    }
}

export default withStyles(styles)(NavigationBar);