	
var storage = firebase.storage();
var storageRef = storage.ref(); 

 function table(){
	  
	  var x = document.createElement("TABLE");
	  x.setAttribute('id', 'theTable');
	  var row = x.insertRow(0);
	 var row2 = x.insertRow(0);
	 row.insertCell(0).innerHTML = "nice words";
	   x.insertRow(1).insertCell(0).innerHTML = "nice fewfw";

		document.getElementById('tableContainer').append(x);
	row2.insertCell(0).innerHTML = "h8b";
			   x.insertRow(0).insertCell(0).innerHTML = "3333 fewfw";
 }
  
  
    function removeTable() {
	  
	  document.getElementById('theTable').remove();
	  
  
  }
  
  function table2(){
	    var x = document.createElement("TABLE");
        x.setAttribute('id', 'reportTable');
        var row = x.insertRow(0);
        for(i = 0; i < 5; i++) {
            var cell = row.insertCell(i)
            cell.innerHTML = "Hello " + i + " header";
        }
        for(i = 1; i < 10; i++) {
            var newRow = x.insertRow(i);
            for(j = 0; j < 5; j++) {
                var newCell = newRow.insertCell();
                newCell.innerHTML = "Hello Cell " + j;
            }
        }
	  
	  document.getElementById('tableContainer').append(x);
  }
  
