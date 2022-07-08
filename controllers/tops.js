const Top = require('../models/top');
const {
    getAllItems,
    createItem,
    getSingleItem,
    updateItem,
    deleteItem
} = require('./common');


const getAllTops = getAllItems(Top);
const createTop = createItem(Top);
const getSingleTop = getSingleItem(Top);
const updateTop = updateItem(Top);
const deleteTop = deleteItem(Top);

module.exports = {
    getAllTops,
    createTop,
    getSingleTop,
    updateTop,
    deleteTop
};
