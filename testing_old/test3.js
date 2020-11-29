  
    function table2(){
	  
	  var y = document.createElement("TABLE");
	  y.setAttribute('id', 'theTable2');
	  var row = y.insertRow(0);
	 row.insertCell(0).innerHTML = "work pelase";
	 row.insertCell(1).innerHTML = "hello"; 
	
	  document.getElementById('tableContainer2').append(y);
	  
	  
  }
  