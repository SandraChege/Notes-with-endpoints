import express, {Request, Response } from "express";
import { sqlConfig } from "../config/dbconfig";
import sql from 'mssql';
    
export const createTask = (req: Request, res: Response) => {
    const { title, content } = req.body;

    const createdAt = new Date();

    const query = `
    INSERT INTO notes
    (title, content, createdAt)
    VALUES(@title, @content, @createdAt)
    `;
    //establish database connection
    sql.connect(sqlConfig, (err) => {
        if (err) {
            console.log("Database connection error:"+err);
        }
        else {
            const request = new sql.Request();
            request.input("title", title)
            request.input("content", content)
            request.input("createdAt", createdAt);
            //execute query
            request.query(query, (err, result) => {
                if (err) {
                    res.send("Error creating note")
                }else{
                    res.send("Note creted successfully")
                }

            })
        }  
    })    
}

export const FetchAllNotes = (req: Request, res: Response) => {
    const query = "SELECT * FROM notes"
  //establish database connection
  sql.connect(sqlConfig, (err) => {
    if (err) {
      console.log("Database connection error:" + err);
    } else {
        const request = new sql.Request();
      //execute query
      request.query(query, (err, result) => {
        if (err) {
          res.send("Error creating note");
        } else {
          res.json(result?.recordset);
        }
      });
    }
  });
};
export const getNoteByID = (req: Request, res: Response) => {
  const noteID = req.params.id;

   const query = "SELECT * FROM notes WHERE ID ===`${ noteID}`";
  //establish database connection
  sql.connect(sqlConfig, (err) => {
    if (err) {
      console.log("Database connection error:" + err);
    } else {
      const request = new sql.Request();
      request.input("noteID", noteID)
      //execute query
      request.query(query, (err, result) => {
        if (err) {
          res.send("Error creating note");
        } else {
          res.json(result?.recordset);
        }
      });
    }
  });
};
export const deleteNoteByID = (req: Request, res: Response) => {
    const noteID = req.params.id;
    
    const query = "DELETE * FROM notes WHERE ID ===`${ noteID}`";

  //establish database connection
  sql.connect(sqlConfig, (err) => {
    if (err) {
      console.log("Database connection error:" + err);
    } else {
      const request = new sql.Request();
      //execute query
      request.query(query, (err, result) => {
        if (err) {
          res.send("Error creating note");
        } else {
          res.json(result?.recordset);
        }
      });
    }
  });
};

