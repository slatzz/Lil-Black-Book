const Sequelize = require('sequelize');
const mysql = require('mysql');

////////////////////////////////////////////////////////////////////////////////////
//////////////////////// SET UP DATABASE //////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
const DB_NAME = 'dictionary';
const DB_USER = 'root';
const DB_PASS = '';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: 'localhost',
    dialect: 'mysql'
  });

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////QUERY/FAVORITES - MODELS ///////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
const Queries = sequelize.define('Queries', {
  id: { 
      type: Sequelize.INTEGER, 
      autoIncrement: true,
      primaryKey: true
  },
  word: {
    type: Sequelize.STRING
  },
  definition: {
    type: Sequelize.STRING,
  }, 
  rating: {
    type: Sequelize.STRING
  }
}, { timestamps: false })

const Favorites = sequelize.define('Favorites', {
  id:{
      type: Sequelize.INTEGER,
      auto_increment: true,
      primaryKey: true
  },
  word: {
    type: Sequelize.STRING
  },
  definition: {
    type: Sequelize.STRING
  }
}, {timestamps: false})

////////////////////////////////////////////////////////////////////////////////////
//////////////////////TEST DATABSE /////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

sequelize.authenticate()
  .then( () => {
      console.log('Dictionary database ready!!!')
  })
  .catch( err => {
    console.log(err, 'Cannot find your lil words :<!')
  })
module.exports = { sequelize, Queries, Favorites };