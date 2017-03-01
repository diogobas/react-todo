import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA4kIJh_X2bMYkqZV1Y0UG1s8WUPYMaN04",
  authDomain: "diogo-todo-app.firebaseapp.com",
  databaseURL: "https://diogo-todo-app.firebaseio.com",
  storageBucket: "diogo-todo-app.appspot.com",
  messagingSenderId: "722228089831"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Diogo',
    age: 29
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//   text: 'Walk the dog!'
// });
//
// console.log('Todo id', newNoteRef.key);

//
// var logData = (snapshot) => {
//   console.log('User ref changed', snapshot.val());
// };
//
// firebaseRef.child('user').on('value', logData);
//
// firebaseRef.child('user').update({name:'Marcos'});
//
// firebaseRef.child('app').update({name: 'Something else!'});

// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val());
// };
//
// firebaseRef.on('value', logData);
//
// firebaseRef.off();
//
// firebaseRef.update({isRunning:false});

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });
//
// firebaseRef.once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });

// firebaseRef.update({
//   isRunning: null
// });
//
// firebaseRef.child('user/age').remove();

// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });

// firebaseRef.child('app/name').remove();

//firebaseRef.remove();

// firebaseRef.update({
//   'app/name': 'Todo Application',
//   'user/name': 'Marcos'
// });
// firebaseRef.child('app').update({
//
//   name: 'Todo Application 2'
// });
//
// firebaseRef.child('user').update({
//   name: 'Debora'
// });

// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application'
// });
//
// firebaseRef.child('app'). update({
//   name: 'Todo Application 2'
// }).then(() => {
//   console.log('Update worked!')
// }, () => {
//   console.log('Update failed!');
// });

//.then(() => {
//   console.log('Set worked!')
// }, () => {
//   console.log('Set failed!');
// });

// firebaseRef.set({
//   appName: 'Todo Application'
// });

// firebaseRef.child('user').set({
//   name: 'Marcos'
// });
//
// firebaseRef.child('app').set({
//   name: 'Todo Application'
// });
