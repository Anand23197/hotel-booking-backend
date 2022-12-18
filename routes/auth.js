import express from "express";
import { register, login } from "../controllers/auth.js";
const router = express.Router();


//make api request using router

router.post("/register", register);
router.post("/login", login);
//exporting so that in other router we can get access 
export default router