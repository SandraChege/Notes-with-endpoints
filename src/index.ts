import express, {Request, Response} from "express";
import * as dotenv from "dotenv";
import note_router from "./routes/notesRoutes";

const app = express()
dotenv.config();

const { PORT} = process.env

// app.listen("/", (req, res) => {
//  console.log("hello");
// });

app.listen("/", (req, res) => {
    res.send("hello from homee")
});


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

