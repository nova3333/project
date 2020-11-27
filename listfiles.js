    function test(){
		 var documentItemsRef = firebase.storage().ref().child("Harrowford Project/documents");
		   var theTable = document.createElement('TABLE1');
    theTable.setAttribute('id', 'reportTable');
    theTable.insertRow(0).insertCell(0).innerHTML = "Reports";
    var count = 1;
	documentItemsRef.listAll().then(function(ret)
    ret.items.forEach(function(itemRef) {
         var reportCell = theTable.insertRow(count).insertCell(0);
        reportCell.innerHTML = itemRef.name;
      
        }
		
    });
	document.getElementById('tableContainer1').append(theTable);
});