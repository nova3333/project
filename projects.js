var storage = firebase.storage();
var storageRef = storage.ref();
var arrayName = [];
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
		
		var count = 0;
		
			var cell1 = row.insertCell(0)
    cell1.innerHTML = "Report Name";

    var cell2 = row.insertCell(1)
    cell2.innerHTML = "Date";
    cell2.onclick = function() {
        console.log(cell2);
        arrayName.sort(StorageItem.compareDateAsc);
    };

    var cell3 = row.insertCell(2)
    cell3.innerHTML = "First Name";

    var cell4 = row.insertCell(3)
    cell4.innerHTML = "Last Name";

    var cell5 = row.insertCell(4)
    cell5.innerHTML = "Accident Occured?";
				
				var count = 0;
	  var documentItemsRef = firebase.storage().ref().child(projectName + "/documents");
	documentItemsRef.listAll().then(function(ret) {
	 ret.items.forEach(function(itemRef) {  
	
  
	
			
		
		   itemRef.getMetadata().then(function(metadata) {
	console.log(itemRef.name);
				var instance = new StorageItem(itemRef, metadata.customMetadata.document_name, new Date(metadata.customMetadata.date_created), new Date(metadata.customMetadata.date_of_content), metadata.customMetadata.last_name, metadata.customMetadata.first_name, metadata.customMetadata.accident_happened);
				arrayName.push(instance);
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
				if(metadata.customMetadata.accident_happened == "false"){
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
  
  class StorageItem {
   
    
    // Reference, String, Date, Date, String, String, Bool
    constructor(itemRef, documentName, dateCreated, dateOfContent, lastName, firstName, accidentHappened) {
        this.itemRef = itemRef;
        this.documentName = documentName;
        this.dateCreated = dateCreated;
        this.dateOfContent = dateOfContent;
        this.lastName = lastName;
        this.firstName = firstName;
        this.accidentHappened = accidentHappened;
    }
  


   compareDateAsc(compareVal){
        return dates.compare(this.dateOfContent, compareVal);
    }

     compareDateDesc(compareVal) {
        if(this.dateOfContent > compareVal) {
            return -1;
        }
        else if(this.dateOfContent < compareVal) {
            return 1;
        }
        else {
            return 0;
        }
    } 

     compareLastNameAsc(compareVal) {
        return this.lastName.compareTo(compareVal);
    }

   compareLastNameDesc(compareVal) {
        if(this.dateOfContent > compareVal) {
            return -1;
        }
        else if(this.dateOfContent < compareVal) {
            return 1;
        }
        else {
            return 0;
        }
    }
}
function openHelp(){
	
	window.open("OnyxRigde Website Functionality.pdf");
}