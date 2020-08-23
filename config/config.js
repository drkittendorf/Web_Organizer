const mysql = require('mysql');
require('dotenv').config()


if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Database is local
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })
};

module.exports = {
    // development: {
    //   username: 'root',
    //   password: process.env.DB_PASSWORD,
    //   database: process.env.DB_NAME,
    //   host:     'localhost',
    //   dialect:  'mysql'
    // },
    
    production: {
        "use_env_variable": "JAWSDB_URL",
        "dialect":  "mysql"
  }
}


connection.connect();


