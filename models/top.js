const mongoose = require('mongoose');


const TopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide name of top'],
        trim: true,
        maxlength: [30, 'Name cannot be more than 20 characters']
    },
    style: {
        type: String,
        trim: true,
        enum: ['casual', 'active', 'business']
    },
    weather: {
        type: String,
        trim: true,
        enum: ['hot', 'warm', 'chilly', 'cold']
    },
    favorite: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('Top', TopSchema);
