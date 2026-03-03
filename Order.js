const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    totalAmount: Number,
    status: { type: String, default: 'Pending' },
    date: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Order', orderSchema);