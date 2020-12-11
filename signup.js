function signUp(){
	var db = firebase.firestore();

	var email = document.getElementById("email");
	var password = document.getElementById("password");
	var firstNameVal = document.getElementById("firstName").value;
	var lastNameVal = document.getElementById("lastName").value;

	const promise = auth.createUserWithEmailAndPassword(email.value, password.value)
		.then(() => {
			db.collection("users").add({
				"email":email.value,
				"first_name":firstNameVal,
				"last_name":lastNameVal
			})
			.then(function(docRef) {
				console.log("Document ID written with: ", docRef.id);
			})
			.catch(function(error) {
				console.log("Error with adding document: ", error);
			})
		}).catch(e => alert(e.message));


	
}	