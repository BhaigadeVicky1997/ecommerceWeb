  //prefixes of implementation that we want to test
  window.indexedDB = window.indexedDB || window.mozIndexedDB || 
         window.webkitIndexedDB || window.msIndexedDB;
         
         //prefixes of window.IDB objects
         window.IDBTransaction = window.IDBTransaction || 
         window.webkitIDBTransaction || window.msIDBTransaction;
         window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || 
         window.msIDBKeyRange
         
         if (!window.indexedDB) {
            window.alert("Your browser doesn't support a stable version of IndexedDB.")
         }
         
         const employeeData = [
            { id: "00-01", name: "gopal", age: 35, email: "gopal@tutorialspoint.com" },

         ];
         var db;
         var request = window.indexedDB.open("trunativ", 1);
         
         request.onerror = function(event) {
         //   console.log("error: ");
         };
         
         request.onsuccess = function(event) {
            db = request.result;
        //    console.log("success: "+ db);
         };
         
         request.onupgradeneeded = function(event) {
         //   console.log(event)
            var db = event.target.result;
            var objectStore = db.createObjectStore("trunativdb");

 
            
            // for (var i in employeeData) {
            //    objectStore.add(employeeData[i]);
            // }
         }