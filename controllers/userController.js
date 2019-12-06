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

exports.byId = function(req, res, next) {
    const connection = getConnection();

    const userId = req.params.id;
    const queryString = "SELECT * FROM users WHERE id = ?";
    connection.query(queryString, [userId], (err, rows, fields) => {
        if (err) {
            console.log("Failed to query for users: " + err);
            res.sendStatus(500);
            res.end();
        }
        res.json(rows);
    });
};