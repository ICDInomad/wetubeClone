import express from "express";
import routes from "../routes";

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");
const handleJoin = (req, res) => res.send("Join");
const handleLogin = (req, res) => res.send("Login");
const handleLogout = (req, res) => res.send("Logout");
const handleSearch = (req, res) => res.send("Search");

globalRouter.get(routes.home, handleHome);
globalRouter.get(routes.join, handleJoin);
globalRouter.get(routes.login, handleLogin);
globalRouter.get(routes.logout, handleLogout);
globalRouter.get(routes.search, handleSearch);

export default globalRouter;