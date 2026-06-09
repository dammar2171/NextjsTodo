import express from 'express';
import authMiddleware from '../middlewares/auth_middleware.js'
import { insertExpense, fetchExpense } from '../controllers/expense_controller.js';
const router = express.Router();

router.post("/addExpense",authMiddleware,insertExpense);
router.get("/fetchExpense",authMiddleware,fetchExpense)

export default router;