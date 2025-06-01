import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
// import { UploadStream } from "cloudinary";
import {upload} from '../middlewares/multer.middleware.js'
import { uploadOnCloudinary } from '../utils/cloudinary.js'

const router = Router()

router.post(
    "/register",
    upload.fields([
        { name: "avatar", maxCount: 1 },
        { name: "coverImage", maxCount: 1 }
    ]),
    
    registerUser)

export default router