

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
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    function productload(){
	   
	   
	   
	   
	   var req = new XMLHttpRequest();

                                    req.onreadystatechange = function () {
                                        if (req.readyState == 4 && req.status == 200) {
                                            var resp = req.responseText;

                                            var tbody = document.getElementById("productbody");
                                            tbody.innerHTML = "";
                                            var users = JSON.parse(resp);
                                            for (var i = 0; i < users.length; i++) {
                                                var u = users[i];
                                                tbody.innerHTML += "<tr id=\"tr-" + u["id"] + "\">" +
                                                         "<td> "+ u["id"] + "</td>" +
                                                        "<td><input type=\"text\" value=\"" + u["productname"] + "\"></td>" +
														 "<td><input type=\"text\" value=\"" + u["sellPrice"] + "\"></td>" +
														  "<td><input type=\"text\" value=\"" + u["buyPrice"] + "\"></td>" +
														   "<td><input type=\"text\" value=\"" + u["qty"] + "\"></td>" +
                                                        "<td><input type=\"text\" value=\"" + u["description"] + "\"></td>" +
                                                        
														
														
                                                        "<td style=\"width: 200px;\"><button class=\"btn btn-primary\" type=\"button\" onclick=\"productupdate(" + u["id"] + ");\">Update</button><br><br><button class=\"btn btn-danger ml-2\" type=\"button\" onclick=\"productdel(" + u["id"] + ");\">Delete</button></td>" +
                                                        "</tr>";
                                            }
                                        }
                                    };
                                    req.open("GET", "http://localhost:8080/products/getProduct", true);
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
	 
	 
	            function productsearh(){
		 
		 
		var keyword= document.getElementById("search2").value;
		
		
		 if(keyword.trim() ==="" ){
			 
			 productload();
		 }else{
			 
			  var req = new XMLHttpRequest();

                                    req.onreadystatechange = function () {
                                        if (req.readyState == 4 && req.status == 200) {
                                            var resp = req.responseText;
                                           
                                             var resp = req.responseText;

                                            var tbody = document.getElementById("productbody");
                                            tbody.innerHTML = "";
                                           
                                            
                                                var u = JSON.parse(resp);
                                                tbody.innerHTML += "<tr id=\"tr-" + u["id"] + "\">" +
                                                        "<td><input type=\"text\" value=\"" + u["id"] + "\"></td>" +
                                                        "<td><input type=\"text\" value=\"" + u["productname"] + "\"></td>" +
														 "<td><input type=\"text\" value=\"" + u["sellPrice"] + "\"></td>" +
														  "<td><input type=\"text\" value=\"" + u["buyPrice"] + "\"></td>" +
														   "<td><input type=\"text\" value=\"" + u["qty"] + "\"></td>" +
                                                        "<td><input type=\"text\" value=\"" + u["description"] + "\"></td>" +
                                                        
														
														
                                                        "<td style=\"width: 200px;\"><button class=\"btn btn-primary\" type=\"button\" onclick=\"productupdate(" + u["id"] + ");\">Update</button><br><br><button class=\"btn btn-danger ml-2\" type=\"button\" onclick=\"productdel(" + u["id"] + ");\">Delete</button></td>" +
                                                        "</tr>";
                                            
                                            
                                        }
                                    };
                                    req.open("GET", "http://localhost:8080/products/searchbyprdid/"+keyword, true);
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
					  
					  
					  
					  
					  function productdel(id){
    
    

                          var req = new XMLHttpRequest();

                                    req.onreadystatechange = function () {
                                        if (req.readyState == 4 && req.status == 200) {
                                            var resp = req.responseText;
                                             
			                             productload();
                                            alert(resp);
                                        }
                                    };
                                    req.open("DELETE","http://localhost:8080/products/deleteProduct/"+id, true);
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
   
   
   function productupdate(Id){ 
    
    
    var tr=document.getElementById("tr-"+Id);
	alert(Id);
    var u={};
    u["id"]=Id;
    u["productname"]=tr.cells[1].getElementsByTagName("input")[0].value;
    u["sellprice"]=tr.cells[2].getElementsByTagName("input")[0].value;
    u["buyprice"]=tr.cells[3].getElementsByTagName("input")[0].value;
	u["qty"]=tr.cells[4].getElementsByTagName("input")[0].value;
	u["description"]=tr.cells[5].getElementsByTagName("input")[0].value;
    
     var req = new XMLHttpRequest();

                                    req.onreadystatechange = function () {
                                        if (req.readyState == 4 && req.status == 200) {
                                            var resp = req.responseText;
											alert("updated...");
                                              productload();
                                          
                                        }
                                    };
                                    req.open("PUT", "http://localhost:8080/products/updateProduct", true);
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
   
   
   function catype(){
	   
	   
	   
	   
	    var req = new XMLHttpRequest();

                                    req.onreadystatechange = function () {
                                        if (req.readyState == 4 && req.status == 200) {
                                            var resp = req.responseText;

                                            var tbody = document.getElementById("cattype");
                                            tbody.innerHTML = "";
                                            var users = JSON.parse(resp);
                                            for (var i = 0; i < users.length; i++) {
                                                var u = users[i];
											
                                                tbody.innerHTML += 
                                                        "<option value="+u["id"]+" > "+u["catname"] +"</option>" 
                                                        
                                                      
                                                       
                                            }
                                        }
                                    };
                                   req.open("GET","http://localhost:8080/mycategory/getcata", true);
                                    req.send();
    
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
   }
   
   function productadd(){
	   
	   
	   
	   
	   var productname=  document.getElementById("productname").value;
  var sellingprice=  document.getElementById("sellingprice").value;
  
    
      var buyingprice=  document.getElementById("buyingprice").value;
      var qty=  document.getElementById("qty").value;
    
      var description=  document.getElementById("discription").value;
	  
	    var cattype=  document.getElementById("cattype").value;
		
		
		 
		
		
	  
	  
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
                                    
                                    var para="productname="+productname+"&description="+description+"&buyPrice="+buyingprice+"&sellPrice="+sellingprice+"&qty="+qty+"&category="+cattype;
                                    
                                    req.open("POST", "http://localhost:8080/products/addProduct", true);
                                    
                                    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                                    req.send(para);
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
   }
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   