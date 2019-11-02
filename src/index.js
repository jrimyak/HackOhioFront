import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginPage from './screens/LoginPage'
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import Landing from './components/Landing'

ReactDOM.render(<Landing/>, document.getElementById('root'));
=======
import CreateAccountPage from './screens/CreateAccountPage';

ReactDOM.render(<Landing />, document.getElementById('root'));
>>>>>>> refs/remotes/origin/master

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
