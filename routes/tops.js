const express = require('express');
const router = express.Router();
const {
    getAllTops,
    createTop
} = require('../controllers/tops');

router.get('/tops', getAllTops);
router.post('/tops', createTop);

module.exports = router;
