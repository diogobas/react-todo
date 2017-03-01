import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA4kIJh_X2bMYkqZV1Y0UG1s8WUPYMaN04",
    authDomain: "diogo-todo-app.firebaseapp.com",
    databaseURL: "https://diogo-todo-app.firebaseio.com",
    storageBucket: "diogo-todo-app.appspot.com",
    messagingSenderId: "722228089831"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
