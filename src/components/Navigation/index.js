import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/styles/withStyles'
import QuadVarsityLogo from '../../assests/img/QuadVarsityLogo.png';
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



class Navigation extends Component {
  
  render() {
    const classes= this.props;
    return (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth type={classes.toolbarButtons }/> : <NavigationNonAuth type={classes.toolbarButtons }/>
      }
    </AuthUserContext.Consumer>
  </div>
    )
    }
}


const NavigationAuth = () => (
  
  <AppBar position='fixed' style={{ background: '#333333', boxShadow: 'none'}}  >
  <Toolbar>
      <Grid
      justify="space-between"
      container
      spacing={24}>
      
      <Link to={ROUTES.LANDING} style={{textDecoration: 'none'}}>
      <img 
      src={QuadVarsityLogo} 
      alt="Quad Logo" 
      height={70} 
      width={70} 
      />
      </Link>
      <span style={{marginLeft: "auto",
      marginRight: -12,
      marginTop: "auto",
      marginBottom: "auto"}}>   

      <Link to={ROUTES.HOME}>
      <Button
                                type="submit"
  
                                color='primary'
                               style={{ background: 'transparent', boxShadow: 'none'}}
                                size="small"
                                variant="contained"
                                margin="dense"
                                >
        Home</Button></Link>
   
      <Link to={ROUTES.ACCOUNT}>
      <Button
                                type="submit"
  
                                color='primary'
                               style={{ background: 'transparent', boxShadow: 'none'}}
                                size="small"
                                variant="contained"
                                margin="dense"
                                >Account
                                </Button></Link>
  
    {/*
    <li>
      <Link to={ROUTES.ADMIN}>Admin</Link>
    </li>
    */}
 
      <Link to={ROUTES.POST}>  <Button
                                type="submit"
  
                                color='primary'
                               style={{ background: 'transparent', boxShadow: 'none'}}
                                size="small"
                                variant="contained"
                                margin="dense"
                                >Post
                                </Button></Link>
       
      <SignOutButton />
   
      </span>
    </Grid>
    </Toolbar>
    </AppBar>
);

const NavigationNonAuth = () => (
  <AppBar position='fixed' style={{ background: '#333333', boxShadow: 'none'}}  >
  <Toolbar>
      <Grid
      justify="space-between"
      container
      spacing={24}>
  <Link to={ROUTES.LANDING} style={{textDecoration: 'none'}}>
      <img 
      src={QuadVarsityLogo} 
      alt="Quad Logo" 
      height={70} 
      width={70} 
      />
      </Link>
<span style={{marginLeft: "auto",
      marginRight: -12,
      marginTop: "auto",
      marginBottom: "auto"}}> 
      <Link to={ROUTES.SIGN_UP}>
      <Button
                                type="submit"
  
                                color='primary'
                                style={{ background: 'transparent', boxShadow: 'none'}}
                                size="small"
                                variant="contained"
                                margin="dense"
                                > Sign Up</Button></Link>
       <Link to={ROUTES.SIGN_IN}>
         
  <Button
                                type="submit"
  
                                color='primary'
                                style={{ background: 'transparent', boxShadow: 'none'}}
                                size="small"
                                variant="contained"
                                margin="dense"
                                >Sign In</Button></Link>
      </span>
      </Grid>
      </Toolbar>
      </AppBar>
);

export default Navigation;