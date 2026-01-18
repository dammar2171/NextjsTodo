import express from "express";
import { signupUser } from "../controllers/user_controller.js";

const router = express.Router();

router.post("/signupUser",signupUser);

export default router;