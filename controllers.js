'use strict';

var response = require('./res');
var connection = require('./conn');


exports.index = function(req, res) {
    response.ok("Rest API Berjalan", res)
};

//menampilkan/select semua data pendaftaran

exports.tampildata = function(req,res) {

    connection.query('SELECT * FROM pendaftaran', function(error, rows, fileds){

        if(error){
            connection.log(error);

        }else {

            response.ok(rows, res)
        }
    });
};

//insert data
exports.tambahdata = function(req,res) {
    
    var nama = req.body.nama;
    var nohp = req.body.nohp;
    var jurusan = req.body.jurusan;

connection.query('INSERT INTO pendaftaran (nama,nohp,jurusan) VALUES(?,?,?)', 
[nama,nohp,jurusan],
    function(error, rows, fields) {
    if(error) {
        console.log(error);
    }else {
        response.ok("Berhasil menambahkan data", res)
    }
});


};