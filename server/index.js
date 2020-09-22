require ('dotenv').config();
const express = require('express');
const path = require('path'); 
const app = express();
const mysql = require('mysql');
const { PORT } = process.env;
const DIR = path.join(__dirname, '../build');
const HTML_FILE = path.join(DIR, 'index.html');
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());
app.use(express.static(DIR));

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
    res.sendFile(HTML_FILE);
})

// app.post('/', (req, res) => {
//     res.status(201).send({"name": "Ghost Bros", "specialty": "Daemons"});
// })

app.listen(PORT, () => {
	console.info(`Dis _ooSPOOKYoo_ app is listening on ${PORT}`)
})



