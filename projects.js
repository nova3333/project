
	
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

  function trail(projectName){
	  var documentItemsRef = firebase.storage().ref().child(projectName + "/documents");
	documentItemsRef.listAll().then(function(ret) {
	ret.items.forEach(function(itemRef) { document.write(itemRef.name);  document.write("<br>");});

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
  
  function removeTable() {
	  
	  document.getElementById('theTable').remove();
	  
  
  }