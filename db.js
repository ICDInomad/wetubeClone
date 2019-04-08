import mongoose from "mongoose";
import dotenv from "dotenv";
import "./models/Video"
dotenv.config()

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = error => console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);

export const videos = [
  {
    id: 324393,
    title: "Video awesome",
    description: "This is something I love",
    views: 24,
    videoFile:
      "https://youtu.be/EngW7tLk6R8",
    creator: {
      id: 121212,
      name: "Nicolas",
      email: "nico@las.com"
    }
  },
  {
    id: 1212121,
    title: "Video super",
    description: "This is something I love",
    views: 24,
    videoFile:
      "https://youtu.be/EngW7tLk6R8",
    creator: {
      id: 121212,
      name: "Nicolas",
      email: "nico@las.com"
    }
  },
  {
    id: 55555,
    title: "Video nice",
    description: "This is something I love",
    views: 24,
    videoFile:
      "https://youtu.be/EngW7tLk6R8",
    creator: {
      id: 121212,
      name: "Nicolas",
      email: "nico@las.com"
    }
  },
  {
    id: 11111,
    title: "Video perfect",
    description: "This is something I love",
    views: 24,
    videoFile:
      "https://youtu.be/EngW7tLk6R8",
    creator: {
      id: 121212,
      name: "Nicolas",
      email: "nico@las.com"
    }
  }
];