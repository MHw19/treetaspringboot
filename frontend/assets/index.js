

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
                                                      
                                                        "<td style=\"width: 200px;\"><button class=\"btn btn-primary\" type=\"button\" onclick=\"update(" + u["id"] + ");\">Update</button><br><br><button class=\"btn btn-danger ml-2\" type=\"button\" onclick=\"del(" + u["id"] + ");\">Delete</button></td>" +
                                                        "</tr>";
                                            }
                                        }
                                    };
                                    req.open("GET", "http://localhost:8080/mycategory/getcata", true);
                                    req.send();
    
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
   }
   
   
   
   function loadalldata(){
	   
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
                                                      
                                                        "<td style=\"width: 200px;\"><button class=\"btn btn-primary\" type=\"button\" onclick=\"update(" + u["id"] + ");\">Update</button><br><br><button class=\"btn btn-danger ml-2\" type=\"button\" onclick=\"del(" + u["id"] + ");\">Delete</button></td>" +
                                                        "</tr>";
                                            }
                                        }
                                    };
                                    req.open("GET", "http://localhost:8080/mycategory/getcata", true);
                                    req.send();
	   
   }
   
   