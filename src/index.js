require ('dotenv').config();
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const mysql = require('mysql');
const { PORT } = process.env;

////// MYSQL DATABASE CONNECTION //////
const DATABASE = 'spooky';
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: DATABASE
});

connection.connect( err => {
    if(err){
        console.log(err, 'Cannot find your spooky boys!')
    } else {
        console.log('Happy Ghost Hunting!')
    }
})
////////////////////////////////////////////////
app.get('/', (req, res) => {
    res.send("HELLO WORLD!");
})

app.listen(PORT, () => {
	console.info(`Dis _ooSPOOKYoo_ app is listening on ${PORT}`)
})
