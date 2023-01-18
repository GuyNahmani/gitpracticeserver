import express from "express";
import dotenv from "dotenv";
import colors from "colors"
import { goalRoutes } from "./routes/goalRoutes.js"
import { userRoutes } from "./routes/userRoutes.js"
import { errorHandler } from "./middleware/errorMiddleware.js"
import { connectDB } from "./config/db.js"

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();
goalRoutes
const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/goals', goalRoutes);
app.use('/api/users',userRoutes );
app.use(errorHandler);


app.listen(port, () => console.log("server is running "));




