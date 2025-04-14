import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
// import userRouter from './routes/user.routes.js'

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

//configuration 
app.use(express.json({limit: "17kb"})); 
app.use(express.urlencoded({extended: true, limit: "17kb"}));
app.use(express.static("public")); 
app.use(cookieParser());



//import routes:
import userRouter from './routes/user.routes.js'

//routes declartaion:
app.use("/api/v1/users", userRouter)            //http:localhost:6000/api/v1/users/register


// export default app;
export { app }