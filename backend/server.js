import path from "path";
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { goalRoutes } from "./routes/goalRoutes.js";
import { userRoutes } from "./routes/userRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import { connectDB } from "./config/db.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __dirname = fileURLToPath(dirname(import.meta.url));

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/goals', goalRoutes);
app.use('/api/users', userRoutes);


//serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
    app.get('*', (req, res) =>
        res.sendFile(
            path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
        )
    );
}
else {
    app.get('/', (req, res) => res.send("please set to production"))
}


app.use(errorHandler);


app.listen(port, () => console.log("server is running "));




