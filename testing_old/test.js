var storage = firebase.storage();
var storageRef = storage.ref();

function table(){
	  
	  var x = document.createElement("TABLE");
	  x.setAttribute('id', 'testTable');
	  var row = x.insertRow(0);
	 x.insertRow(0).insertCell(0).innerHTML = "Projects";
	  var count = 1;
	 var projectCell = x.insertRow(count).insertCell(0);
	   document.getElementById('tableC').append(x);  
	  
  }
   
  function removeTable() {
	  
	  document.getElementById('reportTable').remove();
	  
  
  }
  
  function table3(){
	  
	  var x = document.createElement("TABLE");
	  x.setAttribute('id', 'testTable');
	  var row = x.insertRow(0);
	 x.insertRow(0).insertCell(0).innerHTML = "Projects";
	  var count = 1;
	
	   document.getElementById('tableC').append(x);  
	  
  }
 

 function trail(){
	   var x = document.createElement("TABLE");
	  x.setAttribute('id', 'reportTable');
	  var row = x.insertRow(0);
	 x.insertRow(0).insertCell(0).innerHTML = "Reports";
	  var count = 1;
	  var documentItemsRef = firebase.storage().ref().child("Harrowford Project/documents");
	documentItemsRef.listAll().then(function(ret) {
	 ret.items.forEach(function(itemRef) {  
	var reportCell = x.insertRow(count).insertCell(0);
        reportCell.innerHTML = itemRef.name;
	 reportCell.onclick = function () {
			
            download(this.innerHTML);
        }
	
	});
  document.getElementById('tableB').append(x);
});
  }
  
 function download(reportName){

storage.ref('Harrowford Project/documents/' + reportName).getDownloadURL().then(function (url) {
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
 
