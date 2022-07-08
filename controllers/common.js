// Common controller functions across different clothing items

const getAllItems = (model) => {
    return async (req, res) => {
        try {
            const items = await model.find({});
            res.status(200).json({items});
        } catch (err) {
            res.status(500).json({ msg: err });
        }
}};

const createItem = (model) => {
    return async (req, res) => {
        try {
            const item = await model.create(req.body);
            res.status(201).json({item});
        } catch (err) {
            res.status(500).json({ msg:err });
        }
    };
};

const getSingleItem = (model) => {
    return async (req, res) => {
        const { id:itemID } = req.params;
        try {
            const item = await model.findOne({ _id:itemID});
            res.status(200).json({item});
        } catch (err) {
            res.status(500).json({ msg:err });
        }
    };
};

const updateItem = (model) => {
    return async (req, res) => {
        const { id:itemID } = req.params;
        try {
            const item = await model.findOneAndUpdate({ _id:itemID}, req.body, {
                new: true,
                runValidators: true
            });
            res.status(200).json({item});
        } catch (err) {
            res.status(500).json({err});
        }
    };
};

const deleteItem = (model) => {
    return async (req, res) => {
        const { id:itemID } = req.params;
        try {
            const item = await model.findOneAndDelete({_id:itemID});
            res.status(200).json({item});
        } catch (err) {
            res.status(500).json({err});
        }
    };
};

module.exports = {
    getAllItems,
    createItem,
    getSingleItem,
    updateItem,
    deleteItem,
};