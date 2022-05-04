var mysql = require('mysql');
var con = mysql.createConnection({
    database:"lola la cava",
    host:"127.0.0.1",
    port:"3360",
    user:"root",
    password:"",
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query('select * from users', function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });
