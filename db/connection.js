const mysql = require ('mysql2');

//Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //Youre MYSQL username,
        user: 'root',
        password: 'Root123',
        database: 'election',
    });



    module.exports = db;