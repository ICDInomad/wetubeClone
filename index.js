import express from "express";

const app = express();

const PORT = 3000;

const handleListening = () => console.log(`Listening on : ${PORT}`);

const handleHome = (req, res) => res.send("HI Home.");

const handleProfile = (req, res) => res.send("HI Profile");


app.get("/",handleHome);
app.get("/profile",handleProfile);

app.listen(3000, handleListening);