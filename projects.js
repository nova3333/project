
	
var storage = firebase.storage();
var storageRef = storage.ref();
// var listRef = storageRef.child('Bellevue Project/documents') this should list all files how the fuck DO I LIST THE DIRECTORIES
var listRef = storageRef.child("Harrowford Project/documents");
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
	 x.insertRow(0).insertCell(0).innerHTML = projectName + " Reports";
	  var count = 1;
	  var documentItemsRef = firebase.storage().ref().child(projectName + "/documents");
	documentItemsRef.listAll().then(function(ret) {
	 ret.items.forEach(function(itemRef) {  
	var reportCell = x.insertRow(count).insertCell(0);
        reportCell.innerHTML = itemRef.name;
	 reportCell.onclick = function () {
			// calls download function
            download(projectName,this.innerHTML);
        }
	
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
