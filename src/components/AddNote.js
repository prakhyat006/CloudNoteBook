import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/noteCotext';

const AddNote = (props) => {
    const context = useContext(NoteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" });

    const handleClick = (e) => {
        e.preventDefault({ title: "", description: "", tag: "" });
        addNote(note.title, note.description, note.tag)
        setNote({ title: "", description: "", tag: "" })
        props.showAlert("Added successfully", "success")
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }

    return (
        <div style={{
            maxWidth: '600px',
            margin: '20px auto',
            padding: '30px',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h2 style={{
                color: '#333',
                textAlign: 'center',
                marginBottom: '30px',
                fontSize: '24px',
                fontWeight: '600'
            }}>Add a Note</h2>

            <form>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="title" style={{
                        display: 'block',
                        marginBottom: '8px',
                        color: '#555',
                        fontSize: '14px',
                        fontWeight: '500'
                    }}>Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={note.title}
                        onChange={onChange}
                        style={{
                            width: '100%',
                            padding: '12px',
                            border: '2px solid #e1e5e9',
                            borderRadius: '8px',
                            fontSize: '16px',
                            transition: 'border-color 0.3s ease',
                            outline: 'none',
                            boxSizing: 'border-box'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#007bff'}
                        onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                    />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="description" style={{
                        display: 'block',
                        marginBottom: '8px',
                        color: '#555',
                        fontSize: '14px',
                        fontWeight: '500'
                    }}>Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={note.description}
                        onChange={onChange}
                        rows="4"
                        style={{
                            width: '100%',
                            padding: '12px',
                            border: '2px solid #e1e5e9',
                            borderRadius: '8px',
                            fontSize: '16px',
                            transition: 'border-color 0.3s ease',
                            outline: 'none',
                            resize: 'vertical',
                            fontFamily: 'Arial, sans-serif',
                            boxSizing: 'border-box'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#007bff'}
                        onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                    />
                </div>

                <div style={{ marginBottom: '25px' }}>
                    <label htmlFor="tag" style={{
                        display: 'block',
                        marginBottom: '8px',
                        color: '#555',
                        fontSize: '14px',
                        fontWeight: '500'
                    }}>Tag</label>
                    <input
                        type="text"
                        id="tag"
                        name="tag"
                        value={note.tag}
                        onChange={onChange}
                        style={{
                            width: '100%',
                            padding: '12px',
                            border: '2px solid #e1e5e9',
                            borderRadius: '8px',
                            fontSize: '16px',
                            transition: 'border-color 0.3s ease',
                            outline: 'none',
                            boxSizing: 'border-box'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#007bff'}
                        onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                    />
                </div>

                <button
                    type="submit"
                    onClick={handleClick}
                    style={{
                        width: '100%',
                        padding: '14px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease, transform 0.1s ease',
                        outline: 'none'
                    }}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#0056b3';
                        e.target.style.transform = 'translateY(-1px)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = '#007bff';
                        e.target.style.transform = 'translateY(0)';
                    }}
                    onMouseDown={(e) => e.target.style.transform = 'translateY(0)'}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddNote;