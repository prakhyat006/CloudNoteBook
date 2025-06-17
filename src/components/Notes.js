import React, { useContext, useEffect ,useRef,useState} from 'react'
import NoteContext from '../context/notes/noteCotext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';

function Notes(props) {
  const navigate = useNavigate();
  const context = useContext(NoteContext);
  const { notes, getNotes ,editNote} = context;

 useEffect(() => {
  if(localStorage.getItem('token')){
  getNotes();
  }else{
    navigate("/login");
  }
  // eslint-disable-next-line
}, []);

  const ref=useRef(null);
  const refclose=useRef(null);
  const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: ""})
 
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag});
  }

  const handleClick=(e)=>{
    console.log('updating the note');
        editNote(note.id,note.etitle,note.edescription,note.etag);
        refclose.current.click();
        props.showAlert("Updated successfully","success")
    }

    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value});
    }

    // Inline styles
    const containerStyle = {
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
    };

    const hiddenButtonStyle = {
      display: 'none'
    };

    const modalContentStyle = {
      borderRadius: '12px',
      border: 'none',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
    };

    const modalHeaderStyle = {
      backgroundColor: '#3498db',
      color: 'white',
      borderTopLeftRadius: '12px',
      borderTopRightRadius: '12px',
      padding: '20px'
    };

    const modalTitleStyle = {
      fontSize: '1.3rem',
      fontWeight: '600',
      margin: '0'
    };

    const closeButtonStyle = {
      backgroundColor: 'transparent',
      border: 'none',
      color: 'white',
      fontSize: '1.2rem',
      opacity: '0.8'
    };

    const modalBodyStyle = {
      padding: '25px'
    };

    const formStyle = {
      margin: '0'
    };

    const mbStyle = {
      marginBottom: '20px'
    };

    const labelStyle = {
      display: 'block',
      marginBottom: '8px',
      fontWeight: '600',
      color: '#2c3e50',
      fontSize: '0.95rem'
    };

    const inputStyle = {
      width: '100%',
      padding: '12px 15px',
      border: '2px solid #e9ecef',
      borderRadius: '8px',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      backgroundColor: '#f8f9fa',
      boxSizing: 'border-box'
    };

    const inputFocusStyle = {
      outline: 'none',
      borderColor: '#3498db',
      backgroundColor: '#fff',
      boxShadow: '0 0 0 3px rgba(52, 152, 219, 0.1)'
    };

    const modalFooterStyle = {
      padding: '20px 25px',
      borderTop: '1px solid #e9ecef',
      display: 'flex',
      gap: '10px',
      justifyContent: 'flex-end'
    };

    const closeButtonFooterStyle = {
      padding: '10px 20px',
      backgroundColor: '#6c757d',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      fontSize: '0.95rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    };

    const updateButtonStyle = {
      padding: '10px 20px',
      backgroundColor: '#3498db',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      fontSize: '0.95rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    };

    const updateButtonDisabledStyle = {
      ...updateButtonStyle,
      backgroundColor: '#bdc3c7',
      cursor: 'not-allowed'
    };

    const notesRowStyle = {
      margin: '30px 0'
    };

    const headingStyle = {
      color: '#2c3e50',
      fontSize: '2rem',
      fontWeight: '700',
      marginBottom: '25px',
      textAlign: 'center',
      borderBottom: '3px solid #3498db',
      paddingBottom: '15px'
    };

    const noNotesStyle = {
      textAlign: 'center',
      color: '#6c757d',
      fontSize: '1.1rem',
      padding: '40px 20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
      border: '2px dashed #dee2e6'
    };

  return (
    <div style={containerStyle}>
      <AddNote showAlert={props.showAlert} />
      
      <button 
        ref={ref} 
        type="button" 
        className="btn btn-primary d-none" 
        data-bs-toggle="modal" 
        data-bs-target="#exampleModal"
        style={hiddenButtonStyle}
      >
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content" style={modalContentStyle}>
            <div className="modal-header" style={modalHeaderStyle}>
              <h1 className="modal-title fs-5" id="exampleModalLabel" style={modalTitleStyle}>Edit Note</h1>
              <button 
                type="button" 
                className="btn-close" 
                data-bs-dismiss="modal" 
                aria-label="Close"
                style={closeButtonStyle}
              ></button>
            </div>
            <div className="modal-body" style={modalBodyStyle}>
              <form className="my-3" style={formStyle}>
                <div className="mb-3" style={mbStyle}>
                  <label htmlFor="title" className="form-label" style={labelStyle}>Title</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="etitle" 
                    name="etitle" 
                    value={note.etitle} 
                    aria-describedby="emailHelp" 
                    onChange={onChange}  
                    minLength={5}
                    required
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                  />
                </div>
                <div className="mb-3" style={mbStyle}>
                  <label htmlFor="description" className="form-label" style={labelStyle}>Description</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="edescription" 
                    name="edescription" 
                    value={note.edescription} 
                    onChange={onChange} 
                    required 
                    minLength={5}
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                  />
                </div>
                <div className="mb-3" style={mbStyle}>
                  <label htmlFor="tag" className="form-label" style={labelStyle}>Tag</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="etag" 
                    name="etag" 
                    value={note.etag} 
                    onChange={onChange} 
                    minLength={5} 
                    required
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer" style={modalFooterStyle}>
              <button 
                ref={refclose}
                type="button" 
                className="btn btn-secondary" 
                data-bs-dismiss="modal"
                style={closeButtonFooterStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#5a6268'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#6c757d'}
              >
                Close
              </button>
              <button 
                disabled={note.etitle.length<5||note.edescription.length<5} 
                onClick={handleClick}
                type="button" 
                className="btn btn-primary"
                style={note.etitle.length<5||note.edescription.length<5 ? updateButtonDisabledStyle : updateButtonStyle}
                onMouseEnter={(e) => {
                  if(!e.target.disabled) {
                    e.target.style.backgroundColor = '#2980b9';
                    e.target.style.transform = 'translateY(-1px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if(!e.target.disabled) {
                    e.target.style.backgroundColor = '#3498db';
                    e.target.style.transform = 'translateY(0)';
                  }
                }}
              >
                Update Notes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3" style={notesRowStyle}>
        <h1 style={headingStyle}>Your Notes</h1>
        <div className="container">
          {notes.length===0 && <div style={noNotesStyle}>No Notes to display</div>}
        </div>
        {notes.map((note) => {
          return <Noteitem showAlert={props.showAlert} key={note._id} updateNote={updateNote} note={note} />
        })}
      </div>
    </div>
  )
}

export default Notes