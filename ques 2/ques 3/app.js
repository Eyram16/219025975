
var express = require("express");
var bodyParser = require("body-parser");
var sql = require("mssql");
var app = express();

app.use(bodyParser.json());

app.use(function (req, res, next) {
    
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods",
"GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, XRequested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

var dbConfig = {
    user: "<DB_A2A9C5_db_admin >",
    password: "<pass@word123 >",
    server: "<sql6009.site4now.net >",
    database: "<dbName>"
 
var: executeQuery = function(res, query){        
sql.connect(dbConfig, function (err) {
         if (err) {  
                     console.log("Error while connectingdatabase :- " + err);
                     res.send(err);
                  }
else {
                         
var request = new sql.Request();

request.query(query, function (err, res)
{
 if (err) {
     console.log("Error whilequerying database :- " + err);
res.send(err);
                                     }
else {
 res.send(res);
                                            }
                               });
                       }
      });          
}

app.get("/api/user", function(req , res){
                var query = "select * from TblTodoRecord ";
                executeQuery (res, query);
});

app.post("/api/user", function(req , res){
                var query = "INSERT INTO TblTodoRecord
(Id,Title,Description) VALUES ('123456','Sample Title','SampleDescription');
                executeQuery (res, query);
});

app.delete("/api/user /:id", function(req , res){
 var query = "DELETE FROM TblTodoRecord WHEREId=‘12345’”,
        executeQuery (res, query);
});