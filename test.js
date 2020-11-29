var storage = firebase.storage();
var storageRef = storage.ref();

function table(){
	  
	  var x = document.createElement("TABLE");
	  x.setAttribute('id', 'testTable');
	  var row = x.insertRow(0);
	 x.insertRow(0).insertCell(0).innerHTML = "Projects";
	  var count = 1;
	
	   document.getElementById('tableC').append(x);  
	  
  }
   
  function removeTable() {
	  
	  document.getElementById('reportTable').remove();
	  
  
  }
  
  
 

  function trail(){
	   var x = document.createElement("TABLE");
	  x.setAttribute('id', 'testTable');
	  var row = x.insertRow(0);
	 x.insertRow(0).insertCell(0).innerHTML = "Projects";
	  var count = 1;
	  var documentItemsRef = firebase.storage().ref().child("Harrowford Project/documents");
	documentItemsRef.listAll().then(function(ret) {
	 ret.items.forEach(function(itemRef) {  
	var reportCell = x.insertRow(count).insertCell(0);
        reportCell.innerHTML = itemRef.name;
	
	
	});
  document.getElementById('tableB').append(x);
});
  }