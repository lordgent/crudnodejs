'use strict';

module.exports = function(app) {

    var jsonme = require('./controllers');
    
    app.route('/')
    .get(jsonme.index);


    //select
    app.route('/tampil')
        .get(jsonme.tampildata);
        

    app.route('/tambah')
        .post(jsonme.tambahdata);

}
