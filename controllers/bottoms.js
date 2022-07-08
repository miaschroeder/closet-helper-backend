const Bottom = require('../models/bottom');
const {
    getAllItems,
    createItem,
    getSingleItem,
    updateItem,
    deleteItem
} = require('./common');


const getAllBottoms = getAllItems(Bottom);
const createBottom = createItem(Bottom);
const getSingleBottom = getSingleItem(Bottom);
const updateBottom = updateItem(Bottom);
const deleteBottom = deleteItem(Bottom);

module.exports = {
    getAllBottoms,
    createBottom,
    getSingleBottom,
    updateBottom,
    deleteBottom
};
