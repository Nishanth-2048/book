import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDkwbJsTfBKBPuteXB8WSLfn4ynZ6sgRHw",
    authDomain: "wily-bf353.firebaseapp.com",
    databaseURL: "https://wily-bf353-default-rtdb.firebaseio.com",
    projectId: "wily-bf353",
    storageBucket: "wily-bf353.appspot.com",
    messagingSenderId: "214990184591",
    appId: "1:214990184591:web:0eca3a72b8014c30af50fa"
  };
    firebase.initializeApp(firebaseConfig);
    export default firebase.firestore()