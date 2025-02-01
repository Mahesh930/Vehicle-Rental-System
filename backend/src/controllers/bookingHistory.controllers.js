import BookingHistory from "../models/bookingHistory.models.js";
import ProductBooking from "../models/productBooking.models";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const BookingHistory = asyncHandler(async (req, res) => {
    const user = req.user._id;
    try {
        const bookingHistory = await ProductBooking.find({ user }).populate('productOwner').populate('productId');
        if (!bookingHistory) {
            throw new ApiError(404, "Booking History not found");
        }
        return res
            .status(200)
            .json(new ApiResponse(
                200,
                bookingHistory,
                "Booking History retrieved successfully"
            ));
    } catch (error) {
        throw new ApiError(400, error.message);
    }
});

export { BookingHistory };