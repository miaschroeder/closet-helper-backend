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

const getSingleTop = async (req, res) => {
    const { id:topID } = req.params;
    try {
        const top = await Top.findOne({ _id:topID});
        res.status(200).json({top});
    } catch (err) {
        res.status(500).json({ msg:err });
    }
};

const updateTop = async (req, res) => {
    const { id:topID } = req.params;
    try {
        const top = await Top.findOneAndUpdate({ _id:topID}, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({top});
    } catch (err) {
        res.status(500).json({err});
    }
};

const deleteTop = async (req, res) => {
    const { id:topID } = req.params;
    try {
        const top = await Top.findOneAndDelete({_id:topID});
        res.status(200).json({top});
    } catch (err) {
        res.status(500).json({err});
    }
};

module.exports = {
    getAllTops,
    createTop,
    getSingleTop,
    updateTop,
    deleteTop
};
