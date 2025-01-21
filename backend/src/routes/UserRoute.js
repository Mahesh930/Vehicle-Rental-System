import express from "express";
import {  registerController } from "../controllers/UserControler.js";

const router = express.Router();

// User Registration Route
router.post("/register", registerControlleri); // Calls registerController from UserController

// User Login Route
// router.post("/login", loginController); // Calls loginController from UserController

export default router;
