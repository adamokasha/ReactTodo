import firebase from 'firebase';

try {
  var config = {
      apiKey: process.env.API_KEY,
      authDomain: process.ENV_DOMAIN,
      databaseURL: process.env.DATABASE_URL,
      storageBucket: process.env.STORAGE_BUCKET,
    };
    
    firebase.initializeApp(config);
} catch (e) {
  
}

export var firebaseRef = firebase.database().ref();
// export root so that any file that imports this one will only have to import our firebase config gile and not the firebase module at top
export default firebase;
