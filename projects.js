
	
var storage = firebase.storage();
var storageRef = storage.ref();
function listAllProjects(){
  storageRef.listAll().then(function(res) {

    // PRINTS PROJECT NAMES
    var tableEle = document.createElement('TABLE');
    tableEle.setAttribute('id', 'projectTable');
    tableEle.insertRow(0).insertCell(0).innerHTML = "Projects";
    var count = 1;
    res.prefixes.forEach(function(folderRef) {
         var projectCell = tableEle.insertRow(count).insertCell(0);
        projectCell.innerHTML = folderRef.name;
		
        projectCell.onclick = function () {
			
            trail(this.innerHTML);
        }
		
    });
	document.getElementById('tableContainer').append(tableEle);
});
  
}

function trail(projectName) {
		removeTable("projectTable");
   var x = document.createElement("TABLE");
        x.setAttribute('id', 'reportTable');
        var row = x.insertRow(0);
		var arrayName = [];
		var count = 0;
		
				var cell = row.insertCell(0)
            cell.innerHTML = "Report Name";
					var cell = row.insertCell(1)
            cell.innerHTML = "Date";
					var cell = row.insertCell(2)
            cell.innerHTML = "First Name";
					var cell = row.insertCell(3)
            cell.innerHTML = "Last Name";
				var cell = row.insertCell(4)
            cell.innerHTML = "Accident Occured?";
				
				var count = 0;
	  var documentItemsRef = firebase.storage().ref().child(projectName + "/documents");
	documentItemsRef.listAll().then(function(ret) {
	 ret.items.forEach(function(itemRef) {  
	
  

			
			var fileRef = storageRef.child(projectName + '/documents/' + itemRef.name);
		   fileRef.getMetadata().then(function(metadata) {

					count++;
			  var newRow = x.insertRow(count);
          
                var newCell1 = newRow.insertCell();
                newCell1.innerHTML = itemRef.name;
		 
          
                var newCell = newRow.insertCell();
                newCell.innerHTML = metadata.customMetadata.date_created;
				 var newCell = newRow.insertCell();
                newCell.innerHTML = metadata.customMetadata.first_name;
					 var newCell = newRow.insertCell();
                newCell.innerHTML = metadata.customMetadata.last_name;
				var newCell = newRow.insertCell();
				if(metadata.customMetadata.last_name == "false"){
					newCell.innerHTML = "YES";
					
				}
			 else{
				newCell.innerHTML = "NO"; 
				 
			 }
			  newCell1.onclick = function () {
			// calls download function
            download(projectName,this.innerHTML);
        }
		}).catch(function(error) {
			return "Doesnt work";
		});  
	});

		
			
  document.getElementById('tableB').append(x);
});
  }
  
  
  function table(){
	  
	  var x = document.createElement("TABLE");
	  x.setAttribute('id', 'theTable');
	  var row = x.insertRow(0);
	 row.insertCell(0).innerHTML = "nice words";
	 row.insertCell(1).innerHTML = "hello"; 
	
	  document.getElementById('tableContainer').append(x);
	  
	  
  }
  // removes the table
  function removeTable(tableName) {
	  
	  document.getElementById(tableName).remove();
	  
  
  }
  
  
  
  function download(projectName,reportName){

storage.ref(projectName + '/documents/' + reportName).getDownloadURL().then(function (url) {
    var link = document.createElement("a");
    if (link.download !== undefined) {
        link.setAttribute("href", url);
        link.setAttribute("target", "_blank");
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
})
	 
 }
 
 
 function tableSearch() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById('tableB');
  tr = table.getElementsByTagName("tr");

  for (i = 1; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}


  
  function returnMetadata(projectName,reportName) {
	var fileRef = storageRef.child(projectName + '/documents/' + reportName);
		   fileRef.getMetadata().then(function(metadata) {
  // Metadata now contains the metadata for 'images/forest.jpg'
   metadata.customMetadata.date_created;

}).catch(function(error) {
  return "Doesnt work";
});  
	  
  }
  