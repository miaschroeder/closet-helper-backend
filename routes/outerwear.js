const express = require('express');
const router = express.Router();
const {
    getAllOuterwear,
    createOuterwear,
    getSingleOuterwear,
    updateOuterwear,
    deleteOuterwear,
} = require('../controllers/outerwear');

router.get('/', getAllOuterwear);
router.post('/', createOuterwear);
router.get('/:id', getSingleOuterwear);
router.patch('/:id', updateOuterwear);
router.delete('/:id', deleteOuterwear);

module.exports = router;
