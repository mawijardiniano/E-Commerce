import express from 'express';
import db from './firebaseAdmin.js'; 
import userRouter from "./routes/userController.js"

const app = express();
app.use(express.json());

app.use("/api", userRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
