const express = require('express');
const router = express.Router();
const {
    getAllTops,
    createTop,
    getSingleTop,
    updateTop,
    deleteTop,
} = require('../controllers/tops');

router.get('/:style/:sorted', getAllTops);
router.post('/', createTop);
router.get('/:id', getSingleTop);
router.patch('/:id', updateTop);
router.delete('/:id', deleteTop);

module.exports = router;
