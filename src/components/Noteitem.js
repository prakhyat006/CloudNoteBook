import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteCotext';

const Noteitem = (props) => {
  const context=useContext(NoteContext);
  const {deleteNote}=context;
  const { note ,updateNote} = props;

  // Inline styles
  const colStyle = {
    padding: '10px'
  };

  const cardStyle = {
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e9ecef',
    transition: 'all 0.3s ease',
    height: '100%',
    margin: '15px 0'
  };

  const cardHoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
  };

  const cardBodyStyle = {
    padding: '20px'
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '15px'
  };

  const titleStyle = {
    color: '#2c3e50',
    fontSize: '1.2rem',
    fontWeight: '600',
    margin: '0',
    flex: '1',
    marginRight: '10px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  };

  const iconContainerStyle = {
    display: 'flex',
    gap: '8px'
  };

  const iconStyle = {
    fontSize: '1.1rem',
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '6px',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px'
  };

  const deleteIconStyle = {
    ...iconStyle,
    color: '#e74c3c',
    backgroundColor: '#fdf2f2'
  };

  const deleteIconHoverStyle = {
    backgroundColor: '#e74c3c',
    color: 'white',
    transform: 'scale(1.1)'
  };

  const editIconStyle = {
    ...iconStyle,
    color: '#3498db',
    backgroundColor: '#f0f8ff'
  };

  const editIconHoverStyle = {
    backgroundColor: '#3498db',
    color: 'white',
    transform: 'scale(1.1)'
  };

  const descriptionStyle = {
    color: '#6c757d',
    fontSize: '0.95rem',
    lineHeight: '1.5',
    margin: '0 0 15px 0',
    display: '-webkit-box',
    WebkitLineClamp: '3',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  };

  const tagStyle = {
    display: 'inline-block',
    backgroundColor: '#3498db',
    color: 'white',
    fontSize: '0.75rem',
    fontWeight: '500',
    padding: '4px 8px',
    borderRadius: '12px',
    marginTop: '8px'
  };

  return (
    <div className="col-md-3" style={colStyle}>
      <div 
        className="card my-3" 
        style={cardStyle}
        onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
        onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
      >
        <div className="card-body" style={cardBodyStyle}>
          <div className="d-flex align-items-center" style={headerStyle}>
            <h5 className="card-title" style={titleStyle}>{note.title}</h5>
            <div style={iconContainerStyle}>
              <i 
                className="fa-solid fa-trash mx-2" 
                style={deleteIconStyle}
                onMouseEnter={(e) => Object.assign(e.target.style, deleteIconHoverStyle)}
                onMouseLeave={(e) => Object.assign(e.target.style, deleteIconStyle)}
                onClick={()=>{deleteNote(note._id);props.showAlert("Deleted successfully","success")}}
              ></i>
              <i 
                className="fa-solid fa-user-pen mx-2" 
                style={editIconStyle}
                onMouseEnter={(e) => Object.assign(e.target.style, editIconHoverStyle)}
                onMouseLeave={(e) => Object.assign(e.target.style, editIconStyle)}
                onClick={()=>{updateNote(note)}}
              ></i>
            </div>
          </div>
          <p className="card-text" style={descriptionStyle}>
            {note.description}
          </p>
          <span style={tagStyle}>
            {note.tag}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;