const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.user = require('./admins.model');
db.role = require('./role.model');
db.product = require('./products.model');
db.ROLES = ["admin"]
module.exports = db;