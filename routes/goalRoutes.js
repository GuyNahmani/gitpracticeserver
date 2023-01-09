import express from "express";
const router = express.Router();
//import { getGoals } from "../controllers/goalController.js";
import { getGoals  } from "../controllers/goalController.js"
 


//console.log(getGoals) 
// show me the info inside my requast 
//router.get('/', getGoals);

// using post i insert info to my backend - when i use mongos
router.post('/', (req, res) => {
    res.status(200).json({
        messege: `${req.body.messege}`
    });


});

router.put('/:id', (req, res) => {
    res.status(200).json({ messege: `Update Goals ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
    res.status(200).json({ messege: `delete Goals ${req.params.id}`, });
});
export { router as goalRoutes };
