import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDFsXZjlGCqjCamz8xhqQvE2SmDq-3gPKs",
    authDomain: "todo-app-a247b.firebaseapp.com",
    databaseURL: "https://todo-app-a247b.firebaseio.com",
    storageBucket: "todo-app-a247b.appspot.com",
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
    name: 'Sam',
    age: 29
  }
});

// var notesRef = firebaseRef.child('notes');
// 
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val())
// })
// 
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val())
// })
// 
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val())
// })
// 
// var newNoteRef = notesRef.push({
//   text: 'Eat gumuc!'
// });
// 
// console.log('Todo id', newNoteRef.key);

var TodosRef = firebaseRef.child('todos');

TodosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
})

TodosRef.push({
  text: 'Go for a walk'
});

TodosRef.push({
  text: 'Cook some food'
});
