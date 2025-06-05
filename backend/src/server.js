import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import { ratelimiter } from "./middleware/rateLimiter.js";
import cors from "cors"

dotenv.config();

const app = express();

app.use(cors({
    origin:"http://localhost:5173"
}
));
app.use(express.json());
app.use(ratelimiter);

console.log(process.env.MONGO_URI)

connectDB().then(()=>{
    app.listen(process.env.PORT || 5000 ,()=>{
        console.log("Server started on server: 5000")
    });
})

app.use("/api/notes", notesRoutes)