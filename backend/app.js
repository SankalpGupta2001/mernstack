import  express from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser'
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import  authController  from "./controllers/authController.js";
import colors from "colors";

dotenv.config();
const app=express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
connectDB();

app.get("/",function(req,res){
    res.send("hey");
})
app.use("/api/auth",authController);
app.use("/api/users",userRoutes);
app.use("/api/products",productRoutes);



const PORT =process.env.PORT || 5000;

app.listen(5000,function(req,res){
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
