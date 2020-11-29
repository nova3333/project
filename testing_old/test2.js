  function table(){
	  
	  var x = document.createElement("TABLE");
	  x.setAttribute('id', 'theTable');
	  var row = x.insertRow(0);
	 row.insertCell(0).innerHTML = "nice words";
	 row.insertCell(1).innerHTML = "hello"; 
	 row.onclick = function () {
			
            table2()
        }
	  document.getElementById('tableContainer').append(x);
	  
	  
  }
  
  
    function removeTable() {
	  
	  document.getElementById('theTable').remove();
	  
  
  }
  
  
  
    function table2(){
	 removeTable();
	  var y = document.createElement("TABLE");
	  y.setAttribute('id', 'theTable2');
	  var row = y.insertRow(0);
	 row.insertCell(0).innerHTML = "work pelase";
	 row.insertCell(1).innerHTML = "hello"; 
	
	  document.getElementById('tableContainer2').append(y);
	  
	  
  }
  