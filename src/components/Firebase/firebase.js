import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBJnqCCWOgtw0eFYIBgPK2Y-oz1jQVza7M",
    authDomain: "hackohio.firebaseapp.com",
    databaseURL: "https://hackohio.firebaseio.com",
    projectId: "hackohio",
    storageBucket: "hackohio.appspot.com",
    messagingSenderId: "639771468688",
    appId: "1:639771468688:web:02d7bbf3aa83e083514915",
    measurementId: "G-XM7V6NFN13"
  };


class Firebase {
    constructor() {
      app.initializeApp(config);

      this.auth = app.auth();
    }

    // ** Authentication API **
    doCreateUserWithEmailAndPassword = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) => 
        this.auth.signInWithEmailAndPassword(email, password);

        doSignOut = () => this.auth.signOut();

        doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

        doPasswordUpdate = password =>
            this.auth.currentUser.updatePassword(password);
  }
  export default Firebase;

  