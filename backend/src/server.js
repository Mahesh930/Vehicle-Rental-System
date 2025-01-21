// Import dependencies
import express from 'express';
import { config } from 'dotenv';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute.js';

// Load environment variables
config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Database connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process if the database connection fails
  }
};
connectDB(); // Call the database connection function

// API Routes
app.use('/api/user', userRoute);

// Login API Endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Validate request data
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  // Simulated authentication logic (replace with actual database logic)
  if (email === 'admin@example.com' && password === '1234') {
    res.status(200).json({ message: 'Login successful', token: 'fake-jwt-token' });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
