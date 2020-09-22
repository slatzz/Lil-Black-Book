const Sequelize = require('sequelize');
const mysql = require('mysql');

////// MYSQL DATABASE CONNECTION //////
const DB_NAME = 'spooky';
const DB_USER = 'root';
const DB_PASS = '';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: 'localhost',
    dialect: 'mysql'
  });

sequelize.authenticate()
  .then( () => {
      console.log('Happy Ghost Hunting!')
  })
  .catch( err => {
    console.log(err, 'Cannot find your spooky boys!')
  })

// const DATABASE = 'spooky';
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: DATABASE
// });

// connection.connect( err => {
//     if(err){
//         console.log(err, 'Cannot find your spooky boys!')
//     } else {
//         console.log('Happy Ghost Hunting!')
//     }
// })

module.exports = sequelize;