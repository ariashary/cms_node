const mysql = require("mysql");

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "MuhAshary01",
    database: "mysql_cms"
});

function getConnection() {
    return pool;
}

exports.index = function(req, res, next) {
    const connection = getConnection();

    const queryString = "SELECT * FROM users";
    connection.query(queryString, (err, rows, fields) => {
        if (err) {
            console.log("Failed to query for users: " + err);
            res.sendStatus(500);
            res.end();
        }
        res.json(rows);
    });
};