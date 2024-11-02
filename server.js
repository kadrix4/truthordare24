const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'james carter',
    password: '@Janatkad2004',
    database: 'james carter'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database!');
});
