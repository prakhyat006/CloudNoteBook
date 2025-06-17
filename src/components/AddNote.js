import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/noteCotext'; 
const AddNote = (props) => {
     const context=useContext(NoteContext);
  const {addNote}=context;
  const[note,setNote]= useState({title:"",description:"",tag:""});
    const handleClick=(e)=>{
        e.preventDefault({title:"",description:"",tag:""});
        addNote(note.title,note.description,note.tag)
        setNote({title:"",description:"",tag:""})
        props.showAlert("Added successfully","success")
    }
    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value});
    }
    return (
            <div className="container my-3">
                <h1>Add a anote</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                            Title
                        </label>
                        <input
                        onChange={onChange}
                        value={note.title}
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            aria-describedby="emailHelp"
                            minLength={5}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                            Description
                        </label>
                        <input
                        value={note.description}
                        onChange={onChange}
                            type="text"
                            className="form-control"
                            id="description"
                            name="description"
                            minLength={5}
                            required
                        />
                    </div>
                   <div className="mb-3">
                        <label htmlFor="tag" className="form-label">
                            Tag
                        </label>
                        <input
                        value={note.tag}
                        onChange={onChange}
                            type="text"
                            className="form-control"
                            id="tag"
                            name="tag"
                            minLength={5}
                            required
                        />
                    </div>
                    <button disabled={note.title.length<5||note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>
                        Submit
                    </button>
                </form>
            </div>
    );
};

export default AddNote;
