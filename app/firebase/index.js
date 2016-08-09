import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyDFsXZjlGCqjCamz8xhqQvE2SmDq-3gPKs",
      authDomain: "todo-app-a247b.firebaseapp.com",
      databaseURL: "https://todo-app-a247b.firebaseio.com",
      storageBucket: "todo-app-a247b.appspot.com",
    };
    
    firebase.initializeApp(config);
} catch (e) {
  
}

export var firebaseRef = firebase.database().ref();
// export root so that any file that imports this one will only have to import our firebase config gile and not the firebase module at top
export default firebase;
