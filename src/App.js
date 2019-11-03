import React from 'react';
import { BrowserRouter, Route, Switch, Link, HashRouter } from 'react-router-dom';
import LoginPage from './screens/LoginPage'
import CreateAccountPage from './screens/CreateAccountPage'
import Feed from './screens/Feed'
import Welcome from './screens/Welcome'
function App() {
  const BrowserRouter = require("react-router-dom").BrowserRouter;
  const Route = require("react-router-dom").Route;
  const Link = require("react-router-dom").Link;
  const Switch = require("react-router-dom").Switch;
  const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
  };
  return (
    <div style = {{overflow: 'hidden'}}>
      <BrowserRouter>
          <Route component={ScrollToTop} />
          
                    <Switch>
                      <Route exact path='/' component={Welcome} />
                      <Route exact path='/login' component={LoginPage} /> 
                      <Route exact path='/createAccount' component={CreateAccountPage} />
                      <Route exact path='/feed' component={Feed} />
                    </Switch>
               
              )}/>
            </BrowserRouter>
    </div>
  );
}

export default App;
