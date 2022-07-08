const express = require('express');
const router = express.Router();
const {
    getAllBottoms,
    createBottom,
    getSingleBottom,
    updateBottom,
    deleteBottom,
} = require('../controllers/bottoms');

router.get('/', getAllBottoms);
router.post('/', createBottom);
router.get('/:id', getSingleBottom);
router.patch('/:id', updateBottom);
router.delete('/:id', deleteBottom);

module.exports = router;
