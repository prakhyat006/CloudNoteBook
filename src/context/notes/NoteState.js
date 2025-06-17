import React, { useState } from "react";
import NoteContext from "./noteCotext";
const NoteState=(props)=>{
  const host ="http://localhost:5000"
   const notesint=[]

const[notes,setnotes]=useState(notesint);

//gert all notes
const getNotes=async()=>{
  //Api connection
  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
  method: "GET",
  headers: {
    'Content-Type':'application/json',
    'auth-token':localStorage.getItem('token')
  },
  body: JSON.stringify(),
}
);
  //

  const json =await response.json();
setnotes(json)
 
}
//Add note 
const addNote=async(title,description,tag)=>{
  //Api connection
   const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST", // Changed from PUT to POST
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag }),
    });
   
    const newNote = await response.json(); // Use the actual note returned from backend

    setnotes(notes.concat(newNote)); // Add the new note to existing notes
}
//Delete a note 
const deleteNote=async(id)=>{
  //API call
  const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      'auth-token': localStorage.getItem('token')
    }
  });

  const json = await response.json();
  console.log(json)
  //
  console.log("DEleted")
  const newNotes=notes.filter((note)=>{ return note._id!==id})
  setnotes(newNotes)
}
// Edit a note 
const editNote = async (id, title, description, tag) => {
  // API calling
  const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
      'auth-token': localStorage.getItem('token')
    },
    body: JSON.stringify({ title, description, tag }),
  });

  const json = await response.json();
  console.log("Note updated:", json);

  const updatedNotes = notes.map(note => {
    if (note._id === id) {
      return { ...note, title, description, tag };
    }
    return note;
  });

  setnotes(updatedNotes);
};

    return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;