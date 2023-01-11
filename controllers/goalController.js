import asyncHandler from "express-async-handler"

const getGoals = asyncHandler(async (req, res) => {
    (
        res.status(200).json({ messege: 'Get Goals' })
    )
});

const setGoals = asyncHandler(async (req, res) => {

    console.log(req.body.text);
    if (!req.body.text) {
        res.status(400)
        throw new Error("please add text msg");
    }
    res.status(200).json({ messege: 'Set Goals' });
});
const putGoals = asyncHandler(async (req, res) => {
    (
        res.status(200).json({ messege: `put Goals ${req.params.id}`, })
    )
});
const deleteGoals = asyncHandler(async (req, res) => {
    (
        res.status(200).json({ messege: `delete Goals ${req.params.id}`, })
    )
});
export { getGoals, setGoals, putGoals, deleteGoals };

