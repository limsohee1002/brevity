var mongoose = require('./mongoose');
var db = require('../server.js');

var Schema = mongoose.Schema;

var pointsSchema = new Schema ({
  testsPassed: INTEGER,
  testsFailed: INTEGER,
  speedPoints: INTEGER,
  lengthPoints: INTEGER,
  totalPoints: INTEGER
})

mongoose.model('pointsSchema', pointsSchema);