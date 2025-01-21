import express from "express";
import { upload } from "../middleware/multer.js";
import { addProduct,getAllProduct,getAllProductOfUser,updateProduct } from "../controllers/product.controllers.js";
import { verifyJWT } from "../middleware/auth.js";

const router = express.Router();
// router.use(verifyJWT);

router.route("/add").post(upload.single("vehicleImage"),verifyJWT, addProduct);
router.route("/update/:productId").put(verifyJWT, updateProduct);
router.route("/getVehicles").get(verifyJWT, getAllProduct);
router.route("/getUserVehicles").get(verifyJWT, getAllProductOfUser);

export default router;
