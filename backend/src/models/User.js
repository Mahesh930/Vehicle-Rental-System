const mongoose = require('mongoose');

// Define the MongoDB schema and model
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const User = mongoose.model('User', userSchema);

// Connect to MongoDB
mongoose
    .connect("mongodb+srv://tanujalokhande2526:Tanuja%402526@cluster0.zeh14.mongodb.net/online_vehicle", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });


// Export the User model and insertUser function
module.exports = { User };
