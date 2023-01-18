import asyncHandler from "express-async-handler"
import Goal from '../models/goalModel.js'
import User from '../models/userModel.js'

const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id })

    res.status(200).json(goals)
});


const setGoals = asyncHandler(async (req, res) => {


    if (!req.body.text) {
        res.status(400)
        throw new Error("please add text msg");
    }
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json({ goal });
});
const putGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        res.status(400)
        throw new Error('Id not Found')
    }
    const user = await User.findById(req.user.id)
    if (!user) {
        res.status(401)
        throw new Error('user not found')
    }
    if (goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('user not authrized')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json({ updatedGoal })

});
const deleteGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        res.status(400)
        throw new Error('Id not Found')
    }
    const user = await User.findById(req.user.id)
    if (!user) {
        res.status(401)
        throw new Error('user not found')
    }
    if (goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('user not authrized')
    } 
    await goal.remove();
    res.status(200).json({ id: req.params.id })

});
export { getGoals, setGoals, putGoals, deleteGoals };

