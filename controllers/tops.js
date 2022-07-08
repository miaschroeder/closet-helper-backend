const Top = require('../models/top');



const getAllTops = async (req, res) => {
    try {
        const tops = await Top.find({});
        res.status(200).json({tops});
    } catch (err) {
        res.status(500).json({ msg: err });
    }
};

const createTop = async (req, res) => {
    try {
        const top = await Top.create(req.body);
        res.status(201).json({top});
    } catch (err) {
        res.status(500).json({ msg:err });
    }
};

module.exports = {
    getAllTops,
    createTop,
};
