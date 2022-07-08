const express = require('express');
const router = express.Router();
const {
    getAllTops,
    createTop,
    getSingleTop,
    updateTop,
    deleteTop,
} = require('../controllers/tops');

router.get('/tops', getAllTops);
router.post('/tops', createTop);
router.get('/tops/:id', getSingleTop);
router.patch('/tops/:id', updateTop);
router.delete('/tops/:id', deleteTop);

module.exports = router;
