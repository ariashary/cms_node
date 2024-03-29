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
    let response_msg = req.query.message;
    const connection = getConnection();
    const queryString = "SELECT * FROM users";
    connection.query(queryString, (err, rows, fields) => {
        if (err) {
            console.log("Failed to query for users: " + err);
            res.sendStatus(500);
            res.end();
        }
        res.render('users/index', { 
            data: rows,
            message: response_msg
        });
    });
};

exports.delete = function(req, res, next) {
    let userId = req.params.id;
    const connection = getConnection();
    const queryString = "DELETE FROM users WHERE id = ?";
    connection.query(queryString, [userId], (err, rows, fields) => {
        if (err) {
            console.log("Failed to query for users: " + err);
            res.sendStatus(500);
            res.end();
        }
        res.redirect('/users?message=Successfully deleted user!');
    });
};

exports.update = function(req, res, next) {
    const userId = req.params.id;
    const connection = getConnection();
    const queryString = "SELECT * FROM users WHERE id = ?";
    connection.query(queryString, [userId], (err, rows, fields) => {
        if (err) {
            console.log("Failed to query for users: " + err);
            res.sendStatus(500);
            res.end();
        }
        res.render('users/update', { data: rows });
    });
};

exports.detail = function(req, res, next) {
    const userId = req.params.id;
    const connection = getConnection();
    const queryString = "SELECT * FROM users WHERE id = ?";
    connection.query(queryString, [userId], (err, rows, fields) => {
        if (err) {
            console.log("Failed to query for users: " + err);
            res.sendStatus(500);
            res.end();
        }
        res.render('users/detail', { data: rows });
    });
};

exports.user_update = function(req, res, next) {
    let userId = req.params.id;
    const full_name = req.body.full_name.toUpperCase();
    const position = req.body.position;
    const department = req.body.department;
    const user_id = req.body.user_id;
    const password = req.body.password;
    const address = req.body.address;

    const queryString = "INSERT INTO users (full_name, position, department, user_id, password, address) VALUES (?, ?, ?, ?, ?, ?) WHERE id = ?";
        getConnection().query(queryString, [full_name, position, department, user_id, password, address, userId], (err, result, fields) => {
            if (err) {
                console.log("Failed to insert new users: " + err);
                res.sendStatus(500);
                return
            }
    });
    res.redirect('/users?message=Successfully updated user!');
};

exports.user_create = function(req, res, next) {
    const full_name = req.body.full_name.toUpperCase();
    const position = req.body.position;
    const department = req.body.department;
    const user_id = req.body.user_id;
    const password = req.body.password;
    const confirm_password = req.body.confirm_password;
    const address = req.body.address;

    if (password === confirm_password) {
        const queryString = "UPDATE users SET (full_name, position, department, user_id, password, address) VALUES (?, ?, ?, ?, ?, ?)";
        getConnection().query(queryString, [full_name, position, department, user_id, password, address], (err, result, fields) => {
            if (err) {
                console.log("Failed to insert new users: " + err);
                res.sendStatus(500);
                return
            }
        });
        res.redirect('/users');
    } else {
        res.redirect('/create?message=Your Password must be the same with Confirm Password!');
    }
};