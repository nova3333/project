
	function signUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
	
				
			promise.then(() => alert("Signed Up")).catch(e => alert(e.message));

	
	}
	