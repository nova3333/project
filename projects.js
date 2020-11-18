
	
var storage = firebase.storage();
var storageRef = storage.ref();
// var listRef = storageRef.child('Bellevue Project/documents') this should list all files how the fuck DO I LIST THE DIRECTORIES
var listRef = storageRef.child("Harrowford Project/documents");
function myfunction(){
  listRef.listAll().then(function(res) {
    res.prefixes.forEach(function(folderRef) {
      console.log(++count + " folderRef");
      // All the prefixes under listRef.
      // You may call listAll() recursively on them.
    });
    count = 0;
    res.items.forEach(function(itemRef) {
      document.write(itemRef);
	  document.write("<br>");
      // All the items under listRef.
    });
  }).catch(function(error) {
    // Uh-oh, an error occurred!
  });
}