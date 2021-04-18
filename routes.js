'use strict';

module.exports = function(app) {

    var jsonme = require('./controllers');
    
    app.route('/')
    .get(jsonme.index);

}
