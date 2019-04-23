import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan"; // logger middleware
import helmet from "helmet" // security for nodeJS
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();
app.use(helmet());
app.set('view engine', "pug");
app.use("/uploads", express.static("uploads"));
// globally middlewares ex) ip ban... check log..
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localsMiddleware)
//--------------------------------
app.use(routes.home, globalRouter)
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;