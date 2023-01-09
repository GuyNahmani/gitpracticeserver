//import { express } from "express";
//express.getGoals = 
//const getGoals = express.Router();
 const getGoals = (req,res) => {(
    res.status(200).json({ messege: 'Get Goals', })
) };

const setGoals = (req,res) => {(
    res.status(200).json({ messege: 'Set Goals', })
)};
const putGoals = (req,res) => {(
    res.status(200).json({ messege: `put Goals ${req.params.id}`, })
)};
const deleteGoals = (req,res) => {(
    res.status(200).json({ messege: `delete Goals ${req.params.id}`, })

)};
export { getGoals,setGoals,putGoals,deleteGoals  };

