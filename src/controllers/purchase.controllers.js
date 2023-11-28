const catchError = require('../utils/catchError');
const Purchase = require('../models/Purchase');

const getAll = catchError(async(req, res) => {
    const userId = req.user.id;
    const results = await Purchase.findAll({ where: { userId}});
    return res.json(results);
});



module.exports = {
    getAll,
    
}