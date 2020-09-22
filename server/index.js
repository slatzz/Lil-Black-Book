// import ReactDOM from 'react-dom';

require ('dotenv').config();
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const mysql = require('mysql');
const { PORT } = process.env;
// const React = require('./components/App.js')
// const index = require('index.html');
const bodyParser = require('body-parser');

app.use(express.static('root'));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyParser.json());
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

////// MYSQL DATABASE CONNECTION //////
const DATABASE = 'spooky';
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: DATABASE
});

const mockResponse = {
    'name': 'Spooky Boys', 
    'specialty':'Poltergeists'
};

connection.connect( err => {
    if(err){
        console.log(err, 'Cannot find your spooky boys!')
    } else {
        console.log('Happy Ghost Hunting!')
    }
})
////////////////////////////////////////////////
app.get('/api', (req, res) => {
    res.send(mockResponse);
})

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
})

app.post('/', (req, res) => {
    res.status(201).send({"name": "Ghost Bros", "specialty": "Daemons"});
})

app.listen(PORT, () => {
	console.info(`Dis _ooSPOOKYoo_ app is listening on ${PORT}`)
})



