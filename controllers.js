'use strict';

var response = require('./res');
var connectedd = require('./conn');

exports.index = function(req, res) {
    response.ok("Rest API Berjalan");
};