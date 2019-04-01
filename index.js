import express from "express";

const app = express();

const PORT = 3000;

const handleListening = () => console.log(`Listening on : ${PORT}`);

const handleHome = (req, res) => res.send("HI Home.");

const betweenHome = (req, res, next) => {
  console.log("I'm between");
  next();
}

const handleProfile = (req, res) => res.send("HI Profile");

// globally middlewares ex) ip ban... check log..
app.use(betweenHome);
//--------------------------------
app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(3000, handleListening);