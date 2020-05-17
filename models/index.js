/*  Mongoose  */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.role = require("./role.schema");

/*  Exporting db  */
module.exports = db;