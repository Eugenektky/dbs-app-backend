var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'techtrek-group3.cyw3lwyaxk6v.ap-northeast-1.rds.amazonaws.com',
    user     : 'admin',
    password : 'DBStechtrek3',
    database : 'InsuranceData'
});
connection.connect(function(err){
    if(!err) {
        console.log("Database is connected");
    } else {
        console.log("Error while connecting with database");
    }
});
module.exports = connection;