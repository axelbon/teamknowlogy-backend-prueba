var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "database-instance-1.cs4fty2oirse.us-east-2.rds.amazonaws.com",
    port: 3306,
    user: "admin",
    password: "$database123"
});

conn.connect((err) => {
    if (err) throw err;
});

module.exports = conn;