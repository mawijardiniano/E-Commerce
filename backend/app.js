import express from 'express';
import db from './firebaseAdmin.js'; 
import userRouter from "./routes/userController.js"
import authRouter from "./routes/authController.js"
import productRouter from "./routes/productController.js"

const app = express();
app.use(express.json());

app.use("/api", userRouter);
app.use("/google-login", authRouter)
app.use("/api/products", productRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
