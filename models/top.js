const mongoose = require('mongoose');
const createClothingSchema = require('./common');

module.exports = mongoose.model('Top', createClothingSchema());
