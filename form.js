
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC9XwwgSRTOXlLcyNNWpoblVREm1Pxot-c",
    authDomain: "seniorproject2-57389.firebaseapp.com",
    databaseURL: "https://seniorproject2-57389.firebaseio.com",
    projectId: "seniorproject2-57389",
    storageBucket: "seniorproject2-57389.appspot.com",
    messagingSenderId: "789244828565",
    appId: "1:789244828565:web:fea4d9ecdd3182262f349c",
    measurementId: "G-QX08W4JV54"
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
	
	
	function signUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up");
	}
	
	
	
	function signIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		
		
		
	}
	
	
	function signOut(){
		
		auth.signOut();
		alert("Signed Out");
		
	}
	
	
	
	auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			alert("Active User " + email);
			
			//Take user to a different or home page

			//is signed in
			
		}else{
			
			alert("No Active User");
			//no user is signed in
		}
		
		
		
	});
	

