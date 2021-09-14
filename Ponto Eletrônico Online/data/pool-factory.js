require('dotenv').config({
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
})

const mysql = require('mysql2')

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

console.log('#### pool => criada ####');

pool.on('release', () => console.log('#### pool => conexão retornada ####'));

process.on('SIGINT', () => {
    pool.end(err => {
        if(err) return console.log(err)
        console.log('#### pool => fechada ####')
        process.exit(0)
    })
})

module.exports = pool;