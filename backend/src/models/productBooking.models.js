import mongoose from 'mongoose';

const productBookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    bookingDate: {
        type: Date,
        required: true
    },
    bookingTime: {
        type: String,
        required: true
    },
    bookingStatus: {
        type: String
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    productOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, { timestamps: true });

const ProductBooking = mongoose.model('ProductBooking', productBookingSchema);
export default ProductBooking;