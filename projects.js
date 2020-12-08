var storage = firebase.storage();
var storageRef = storage.ref();
var reportList = [];
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
			removeTable("projectTable");
            getDataFromFirebase(this.innerHTML);
			loadTable(this.innerHTML);
		
        }
		
    });
	document.getElementById('tableContainer').append(tableEle);
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
	  
	 var x = document.getElementById(tableName);
	 if(x === null){
		console.log("table " + tableName + " is null") 
	 }
	  else{
		  x.remove();
		  
	  }
  
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
	getDateCreatedLocaleString(){
		
		return this.dateCreated.toLocaleDateString();
	}
	getItemRef(){
		return this.itemRef;
		
	}
	getDocumentName(){
		
		return this.documentName;
	}
	
	getDateCreated(){
		return this.dateCreated;
		
	}
	
	getDateOfContent(){
		
		return this.dateOfContent;
		
	}
	
	getLastName(){
		return this.lastName;
	}
	
	getFirstName(){
		
		return this.firstName;
	}
	
	getAccidentStatus(){
		return this.accidentHappened;
		
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
function getDataFromFirebase(projectName) {
    var dir = firebase.storage().ref().child(projectName + "/documents");
    dir.listAll().then(function(ret) {
        var totalSize = ret.items.length;
		var count = 0;
        ret.items.forEach(function(itemRef) {
            
            itemRef.getMetadata().then(function(metadata) {
                var documentName = metadata.customMetadata.document_name;
                var dateCreated = new Date(metadata.customMetadata.date_created);
                var dateOfContent = new Date(metadata.customMetadata.date_of_content);
                var lastName = metadata.customMetadata.last_name;
                var firstName = metadata.customMetadata.first_name;
				console.log(firstName);
                var accidentHappened = (metadata.customMetadata.accident_happened);
				if(metadata.customMetadata.accident_happened === "true")
				{
					accidentHappened = "YES";
				}
				else {
					
					accidentHappened = "NO";
				}
                var instance = new StorageItem(itemRef, documentName, dateCreated, dateOfContent, lastName, firstName, accidentHappened);
                reportList.push(instance);
				console.log(count + 1)
                if(verifyCount(++count, totalSize)) {
                    addContentToTable();
                }
            });
        });
    });
}

function addContentToTable() {
	var table = document.getElementById("reportTable");
	
	if(table === null) {
        console.log("reportTable is null");
    }
    else {
      
    }
	
	var count = 1;
	reportList.forEach(function(item) {
			var insertRow = table.insertRow(count++);
			
			insertRow.insertCell().innerHTML = item.getDocumentName();
			insertRow.insertCell().innerHTML = item.getDateCreatedLocaleString();
			insertRow.insertCell().innerHTML = item.getFirstName();
			insertRow.insertCell().innerHTML = item.getLastName();
			insertRow.insertCell().innerHTML = item.getAccidentStatus();
		
	});
}

function loadTable(projectName) {
	removeTable("reportTable");
	var tableEle = document.createElement("TABLE");
	tableEle.setAttribute("id", "reportTable");
	var headerRow = tableEle.insertRow(0);
	
	var repNameHeader = headerRow.insertCell();
	repNameHeader.innerHTML = "Report Name";
	
	var dateCreatedHeader = headerRow.insertCell();
	dateCreatedHeader.innerHTML = "Date";

	
	var firstNameHeader = headerRow.insertCell();
	firstNameHeader.innerHTML = "First Name";
	
	var lastNameHeader = headerRow.insertCell();
	lastNameHeader.innerHTML = "Last Name";
	
	var accidentStatusHeader = headerRow.insertCell();
	accidentStatusHeader.innerHTML = "Accident Occurred?";
	
	document.getElementById('reportTableContainer').append(tableEle);
}

function verifyCount(position, end) {
	console.log("current: " + position + " end: " + end);
    return position === end;
}
function createProject(projectName){


}