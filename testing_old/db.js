
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBW2lFWZ7kcCYQYue2bn3GwJ__3o2dRN4A",
    authDomain: "testproject-e2e7b.firebaseapp.com",
    databaseURL: "https://testproject-e2e7b.firebaseio.com/",
    projectId: "testproject-e2e7b",
    storageBucket: "testproject-e2e7b.appspot.com",
    messagingSenderId: "235711990032",
    appId: "1:235711990032:web:c351938147d72dd6983d95",
    measurementId: "G-WDMH8VHBE6"
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

