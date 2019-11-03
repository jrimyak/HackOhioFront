import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Feed from './screens/Feed'
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import Firebase, { FirebaseContext } from './components/Firebase';


ReactDOM.render(
<FirebaseContext.Provider value={new Firebase()}>
<App />
</FirebaseContext.Provider>, document.getElementById('root'));
=======
<<<<<<< HEAD
import Landing from './components/Landing'

ReactDOM.render(<Landing/>, document.getElementById('root'));
=======
import CreateAccountPage from './screens/CreateAccountPage';

ReactDOM.render(<Landing />, document.getElementById('root'));
>>>>>>> refs/remotes/origin/master
>>>>>>> 00e03015081f722096afecef3f5efe55298c9d8e

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
