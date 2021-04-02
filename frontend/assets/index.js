

   function catrgoryload(){
	   
	   
	   
	   
	   var req = new XMLHttpRequest();

                                    req.onreadystatechange = function () {
                                        if (req.readyState == 4 && req.status == 200) {
                                            var resp = req.responseText;

                                            var tbody = document.getElementById("catabody");
                                            tbody.innerHTML = "";
                                            var users = JSON.parse(resp);
                                            for (var i = 0; i < users.length; i++) {
                                                var u = users[i];
                                                tbody.innerHTML += "<tr id=\"tr-" + u["id"] + "\">" +
                                                        "<td>" + u["id"] + "</td>" +
                                                        "<td><input type=\"text\" value=\"" + u["catname"] + "\"></td>" +
                                                        "<td><input type=\"text\" value=\"" + u["description"] + "\"></td>" +
                                                      
                                                        "<td style=\"width: 200px;\"><button class=\"btn btn-primary\" type=\"button\" onclick=\"categoryupdate(" + u["id"] + ");\">Update</button><br><br><button class=\"btn btn-danger ml-2\" type=\"button\" onclick=\"categorydel(" + u["id"] + ");\">Delete</button></td>" +
                                                        "</tr>";
                                            }
                                        }
                                    };
                                    req.open("GET", "http://localhost:8080/mycategory/getcata", true);
                                    req.send();
    
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
   }
   
   
   
     function categorysearh(){
		 
		 
		var keyword= document.getElementById("searchCat").value;
		
		
		 if(keyword.trim() ==="" ){
			 
			 catrgoryload();
		 }else{
			 
			  var req = new XMLHttpRequest();

                                    req.onreadystatechange = function () {
                                        if (req.readyState == 4 && req.status == 200) {
                                            var resp = req.responseText;
                                           
                                            var tbody = document.getElementById("catabody");
                                            tbody.innerHTML = "";
                                            var u = JSON.parse(resp);
                                           
                                                tbody.innerHTML += "<tr id=\"tr-" + u["id"] + "\">" +
                                                        "<td>" + u["id"] + "</td>" +
                                                        "<td><input type=\"text\" value=\"" + u["catname"] + "\"></td>" +
                                                        "<td><input type=\"text\" value=\"" + u["description"] + "\"></td>" +
                                                      
                                                        "<td style=\"width: 200px;\"><button class=\"btn btn-primary\" type=\"button\" onclick=\"categoryupdate(" + u["id"] + ");\">Update</button><br><br><button class=\"btn btn-danger ml-2\" type=\"button\" onclick=\"categorydel(" + u["id"] + ");\">Delete</button></td>" +
                                                        "</tr>";
                                            
                                        }
                                    };
                                    req.open("GET", "http://localhost:8080/mycategory/getcatabyid/"+keyword, true);
                                    req.send();
			 
		 }
		
    
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
	 }
   
   
   
   
                function categorydel(id){
    
    

                          var req = new XMLHttpRequest();

                                    req.onreadystatechange = function () {
                                        if (req.readyState == 4 && req.status == 200) {
                                            var resp = req.responseText;
                                             
			                             catrgoryload();
                                            alert(resp);
                                        }
                                    };
                                    req.open("DELETE","http://localhost:8080/mycategory/deletecataById/"+id, true);
                                    req.send();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}
   
   
   
   
   
   
   function categoryupdate(Id){ 
    
    
    var tr=document.getElementById("tr-"+Id);
    var u={};
    u["id"]=Id;
    u["catname"]=tr.cells[1].getElementsByTagName("input")[0].value;
    u["description"]=tr.cells[2].getElementsByTagName("input")[0].value;
    
    
     var req = new XMLHttpRequest();

                                    req.onreadystatechange = function () {
                                        if (req.readyState == 4 && req.status == 200) {
                                            var resp = req.responseText;
											alert("Updated..");
                                              catrgoryload();
                                          
                                        }
                                    };
                                    req.open("PUT", "http://localhost:8080/mycategory/upadtecategory", true);
                                    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                                    req.send(JSON.stringify(u));
    
    
}
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   function categoryadd(){
	   
  var catname=  document.getElementById("catname").value;
  var description=  document.getElementById("description").value;
  
    
    
    
    
    
      var req = new XMLHttpRequest();

                                    req.onreadystatechange = function () {
                                        if (req.readyState == 4 && req.status == 200) {
                                            var resp = req.responseText;
                                            if(resp !=null){
                                                
                                               alert("sucess");
                                               window.location.reload();
                                            }
                                             
                                        }
                                    };
                                    
                                    var para="catname="+catname+"&description="+description;
                                    
                                    req.open("POST", "http://localhost:8080/mycategory/savecategory", true);
                                    
                                    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                                    req.send(para);
    
    
    
	   
   }
   
   