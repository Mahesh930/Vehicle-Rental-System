import mongoose from 'mongoose';

const bookingHistorySchema = new mongoose.Schema({
    bookingDate:{
        type: Date,
        required: true
    },
    bookingTime:{
        type: String,
        required: true
    },
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    productOwner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

},{timestamps: true});

const BookingHistory = mongoose.model('BookingHistory', bookingHistorySchema);
export default BookingHistory;