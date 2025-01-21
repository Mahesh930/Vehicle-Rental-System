const mongoose = require('mongoose');

// Define the Product Schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
  },
  category: {
    type: String,
    enum: ['Car', 'Bike', 'Truck', 'Van', 'SUV'],
    required: [true, 'Product category is required'],
  },
  brand: {
    type: String,
    required: [true, 'Brand is required'],
  },
  rentalPricePerDay: {
    type: Number,
    required: [true, 'Rental price per day is required'],
    min: [0, 'Rental price cannot be negative'],
  },
  availability: {
    type: Boolean,
    default: true, // Default to available
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the Product Model
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
