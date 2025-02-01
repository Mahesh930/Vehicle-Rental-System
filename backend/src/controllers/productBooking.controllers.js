import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import Product from "../models/product.models.js";


const ProductBooking = asyncHandler(async (req, res) => {
    const { user, mobile, bookingDate, bookingTime, bookingStatus, productId, productOwner } = req.body;
    try {

        const product = await Product.findById(productId);
        if (!product) {
            throw new ApiError(404, "Product not found");
        }

        if (product.available == false) {
            throw new ApiError(400, "Product not available for booking");
        }

        const productBooking = new ProductBooking({
            user,
            mobile,
            bookingDate,
            bookingTime,
            productId,
            productOwner
        });
        const createdProductBooking = await productBooking.save();

        if (!createdProductBooking) {
            throw new ApiError(400, "Product Booking failed");
        }

        product.available = false;
        await product.findByIdAndUpdate(product._id, product);


        return res
            .status(201)
            .json(new ApiResponse(
                201,
                createdProductBooking,
                "Product Booking created successfully"
            ));
    } catch (error) {
        throw new ApiError(400, error.message);
    }
});

export { ProductBooking };