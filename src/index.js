import express from "express"
import dotenv from "dotenv"
import cors from "cors"


import router from "./routes/userRouters.js"
import errorHandler from "./Middlewares/errorHandler.js";
import createUserTable from "./data/createUserTable.js";

dotenv.config();
const app = express();
const Port = process.env.PORT || 7708

//Middelwares
app.use(express.json());
app.use(cors());

//Routers
app.use(router);

// Error Handler Middleware
app.use(errorHandler);

// Create Table once 
createUserTable();


// Server 
app.listen( Port,()=>{
    console.log(`server running on port ${Port}`);
}  )