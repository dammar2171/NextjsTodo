import express from 'express';
import authMiddleware from '../middlewares/auth_middleware.js'
import { insertExpense, fetchExpense ,deleteExpense} from '../controllers/expense_controller.js';
const router = express.Router();

router.post("/addExpense",authMiddleware,insertExpense);
router.get("/fetchExpense",authMiddleware,fetchExpense)
router.delete("/deleteExpense/:id",authMiddleware,deleteExpense)

export default router;