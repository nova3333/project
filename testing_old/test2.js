	
var storage = firebase.storage();
var storageRef = storage.ref(); 

 function table(){
	  
	  var x = document.createElement("TABLE");
	  x.setAttribute('id', 'theTable');
	  var row = x.insertRow(0);
	 var row2 = x.insertRow(0);
	 row.insertCell(0).innerHTML = "nice words";
	   row.insertCell(1).innerHTML = "wordzzz";

		document.getElementById('tableContainer').append(x);
	row2.insertCell(0).innerHTML = "h8b";
		row2.insertCell(1).innerHTML = "h8b";
 }
  
  
    function removeTable() {
	  
	  document.getElementById('theTable').remove();
	  
  
  }
  
  function table2(){
	  
	  
	  
  }
  
