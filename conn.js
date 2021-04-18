var mysql = require('mysql');

//buat koneksi
const koneksi = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs'
});

koneksi.connect((err) => {

if(err) throw err;
console.log('database connected');

});

module.exports = koneksi;