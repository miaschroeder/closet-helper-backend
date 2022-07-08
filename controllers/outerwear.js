const Outerwear = require('../models/outerwear');
const {
    getAllItems,
    createItem,
    getSingleItem,
    updateItem,
    deleteItem
} = require('./common');


const getAllOuterwear = getAllItems(Outerwear);
const createOuterwear = createItem(Outerwear);
const getSingleOuterwear = getSingleItem(Outerwear);
const updateOuterwear = updateItem(Outerwear);
const deleteOuterwear = deleteItem(Outerwear);

module.exports = {
    getAllOuterwear,
    createOuterwear,
    getSingleOuterwear,
    updateOuterwear,
    deleteOuterwear
};
