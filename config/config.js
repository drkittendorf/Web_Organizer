require('dotenv').config()
const mysql = require('mysql');

module.exports = {
    development: {
      username: 'root',
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host:     'localhost',
      dialect:  'mysql'
    },
    
    production: {
        "use_env_variable": "JAWSDB_URL",
        "dialect":  "mysql"
  }
}


// var connection;
// if (process.env.JAWSDB_URL) {
//     // Database is JawsDB on Heroku
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//     // Database is local
//     connection = mysql.createConnection({
//         port: 3306,
//         host: 'localhost',
//         user: 'root',
//         password: 'process.env.DB_PASSWORD',
//         database: 'process.env.DB_NAME'
//     })
// };







