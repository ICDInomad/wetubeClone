import express from "express";
import morgan from "morgan"; // logger middleware
import helmet from "helmet" // security for nodeJS
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import {userRouter} from "./routes";

const app = express();

const handleHome = (req, res) => res.send("HI Home.");


const handleProfile = (req, res) => res.send("HI Profile");

// globally middlewares ex) ip ban... check log..
app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(helmet());
app.use(morgan("dev"));
//--------------------------------

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter);

export default app;