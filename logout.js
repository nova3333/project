
	function signOut(){
		
		auth.signOut();
		alert("Signed Out");
			window.location.href="login.html";
	}
	
	firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    alert("You are not signed in");
	window.location.href = "login.html";
  }
});