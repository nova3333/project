	
var storage = firebase.storage();
var storageRef = storage.ref(); 

 function table(){
	document.write(myFunction());
		
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
  
function myFunction(){
			var fileRef = storageRef.child('Harrowford/documents/2020-04-07.pdf');
	   fileRef.getMetadata().then(function(metadata) {
		   
		   
		  return console.log(metadata.customMetadata.date_created);
	   }).catch(function(error) {
  // Uh-oh, an error occurred!
});
	   
	 
	

}



  