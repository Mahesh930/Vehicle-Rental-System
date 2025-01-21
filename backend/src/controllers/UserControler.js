const insertUser = require("../helpers/userHelper");
const { User } = require("../models/User.js");

// Register a user
const registerController = async (req, res) => {
  const { name, email, password } = req.body;

  if(!name) {
    console.log("name is required");
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).send('User already exists.');

    const user = await User.create({ name, email, password });
    insertUser(user);

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// // login
// const loginController = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

module.exports = { registerController};
