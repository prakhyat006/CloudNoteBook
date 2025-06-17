import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const[cred,setCred]=useState({name:"",email:"",password:"",cpassword:""});
  const navigate = useNavigate();

  const handleSubmit=async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST", // Changed from PUT to POST
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name:cred.name, email: cred.email,password:cred.password}),
    });
    const json= await response.json();
    if(json.success){
        //redireect 
        localStorage.setItem('token',json.authToken)
        props.showAlert("Account created successfully","success")
        navigate("/");
    }
    else{
        props.showAlert("Invalid Creditianls","danger")
    }
    }

  const onChange=(e)=>{
        setCred({...cred,[e.target.name]:e.target.value});
    }

    // Inline styles
    const containerStyle = {
        maxWidth: '500px',
        margin: '50px auto',
        padding: '40px',
        background: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
    };

    const headingStyle = {
        textAlign: 'center',
        color: '#2c3e50',
        fontSize: '1.8rem',
        marginBottom: '30px',
        paddingBottom: '15px',
        borderBottom: '2px solid #3498db'
    };

    const formStyle = {
        marginTop: '20px',
        padding: '0'
    };

    const mbStyle = {
        marginBottom: '25px'
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

    const formTextStyle = {
        fontSize: '0.85rem',
        color: '#6c757d',
        marginTop: '5px'
    };

    const buttonStyle = {
        display: 'inline-block',
        padding: '12px 30px',
        fontSize: '1rem',
        fontWeight: '600',
        textAlign: 'center',
        textDecoration: 'none',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        width: '100%',
        backgroundColor: '#3498db',
        color: 'white'
    };

  return (
    <div className='mt-2' style={containerStyle}>
      <h2 style={headingStyle}>Create account to User InoteBook</h2>
      <form className='container' onSubmit={handleSubmit} style={formStyle}>
        <div className="mb-3" style={mbStyle}>
    <label htmlFor="name" className="form-label" style={labelStyle}>Name</label>
    <input 
        type="text" 
        name='name' 
        className="form-control" 
        id="name" 
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
    <label htmlFor="email" className="form-label" style={labelStyle}>Email address</label>
    <input 
        type="email" 
        name='email' 
        className="form-control" 
        id="exampleInputEmail1" 
        aria-describedby="emailHelp"
        onChange={onChange}
        minLength={5} 
        required 
        style={inputStyle}
        onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
        onBlur={(e) => Object.assign(e.target.style, inputStyle)}
    />
    <div id="emailHelp" className="form-text" style={formTextStyle}>We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3" style={mbStyle}>
    <label htmlFor="password" className="form-label" style={labelStyle}>Password</label>
    <input 
        type="password" 
        name='password' 
        className="form-control" 
        id="password" 
        onChange={onChange} 
        minLength={5}
        required
        style={inputStyle}
        onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
        onBlur={(e) => Object.assign(e.target.style, inputStyle)}
    />
  </div>
  <div className="mb-3" style={mbStyle}>
    <label htmlFor="cpassword" className="form-label" style={labelStyle}>Confrim Password</label>
    <input 
        type="password" 
        name='cpassword' 
        className="form-control" 
        id="cpassword" 
        onChange={onChange}
        minLength={5} 
        required
        style={inputStyle}
        onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
        onBlur={(e) => Object.assign(e.target.style, inputStyle)}
    />
  </div>
  <button 
        type="submit" 
        className="btn btn-primary"
        style={buttonStyle}
        onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#2980b9';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 4px 15px rgba(52, 152, 219, 0.3)';
        }}
        onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#3498db';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
        }}
  >Submit</button>
</form>
    </div>
  )
}

export default Signup