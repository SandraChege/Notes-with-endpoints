import { Router } from "express"

import { createTask, FetchAllNotes, getNoteByID, deleteNoteByID } from "../controllers/notescontrollers";

const note_router = Router();

note_router.post("/", createTask);

note_router.get("/fetch", FetchAllNotes);

note_router.get("/getNote", getNoteByID);

note_router.delete("/delete", deleteNoteByID);

export default note_router;

