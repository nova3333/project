
	
	function signIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		
		
		
	}
	
	
	function signOut(){
		
		auth.signOut();
		
		alert("Signed Out");
		window.location.href="login.html";
	}
	
	function validate()
	{
		
		
		
		
	}
	
	auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			alert("Active User " + email);
			window.location.href="home.html";
			//Take user to a different or home page

			//is signed in
			
		}else{
			
			
			//no user is signed in
		}
		
		
		
	});
	

