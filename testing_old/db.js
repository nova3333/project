
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 var firebaseConfig = {
    apiKey: "AIzaSyBbNJcACZbYHj--wy1TonQI0FTIBE9TkmA",
    authDomain: "onyxridgecm.firebaseapp.com",
    databaseURL: "https://onyxridgecm.firebaseio.com/",
    projectId: "onyxridgecm",
    storageBucket: "onyxridgecm.appspot.com",
    messagingSenderId: "317462186388",
    appId: "1:317462186388:web:28e101f71f5142ce896781",
    measurementId: "G-ZPQT2Y1Z3Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// Your web app's Firebase configuration
  var firebaseConfig = {
//firebase config stuff
  };
  // Initialize Firebase
 if (!firebase.apps.length) {
   firebase.initializeApp({});
}
  
	const auth = firebase.auth();

