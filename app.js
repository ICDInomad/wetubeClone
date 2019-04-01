import express from "express";
import morgan from "morgan"; // logger middleware
import helmet from "helmet" // security for nodeJS
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();
app.set('view engine', "pug");
// globally middlewares ex) ip ban... check log..
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));
//--------------------------------

app.use(routes.home, globalRouter)
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;