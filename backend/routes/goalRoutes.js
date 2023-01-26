import express from "express";
const router = express.Router();
import { getGoals, setGoals, putGoals, deleteGoals } from "../controllers/goalController.js"
import { protect } from "../middleware/authMiddleware.js"


//console.log(getGoals) 
// show me the info inside my requast 


router.route('/').get(protect,getGoals).post(protect,setGoals);

router.route('/:id').delete(protect,deleteGoals).put(protect,putGoals);
// using post i insert info to my backend - when i use mongos

export { router as goalRoutes };
