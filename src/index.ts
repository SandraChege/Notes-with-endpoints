import express, {Request, Response} from "express";
import * as dotenv from "dotenv";
import note_router from "./routes/notesRoutes";

const app = express()
dotenv.config();

const { PORT} = process.env

// app.listen("/", (req, res) => {
//  console.log("hello");
// });

app.use("/", note_router);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

