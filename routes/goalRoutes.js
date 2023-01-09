import express from "express";
const router = express.Router();
//import { getGoals } from "../controllers/goalController.js";
import { getGoals,setGoals,putGoals,deleteGoals  } from "../controllers/goalController.js"
 


//console.log(getGoals) 
// show me the info inside my requast 

router.route('/').get(getGoals).post(setGoals);

router.route('/:id').delete(deleteGoals).put(putGoals);
// using post i insert info to my backend - when i use mongos

export { router as goalRoutes };
