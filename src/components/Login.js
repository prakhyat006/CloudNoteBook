import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const[cred,setCred] =useState({email:"",password:""});
    const navigate = useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST", // Changed from PUT to POST
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: cred.email,password:cred.password}),
    });
    const json= await response.json();
    if(json.success){
        //redireect 
        localStorage.setItem('token',json.authToken)
        props.showAlert("Logged in successfully","success")
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
        marginTop: '20px'
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
      <h2 className='my-2' style={headingStyle}>Login To continue to iNotebook</h2>
     <form onSubmit={handleSubmit} style={formStyle}>
  <div class="mb-3" style={mbStyle}>
    <label for="email" class="form-label" style={labelStyle}>Email address</label>
    <input 
        onChange={onChange} 
        type="email" 
        class="form-control"
        id="email" 
        name='email' 
        aria-describedby="emailHelp"
        style={inputStyle}
        onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
        onBlur={(e) => Object.assign(e.target.style, inputStyle)}
    />
    <div id="emailHelp" class="form-text" style={formTextStyle}>We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3" style={mbStyle}>
    <label for="password" class="form-label" style={labelStyle}>Password</label>
    <input 
        onChange={onChange} 
        type="password" 
        class="form-control" 
        id="password" 
        name='password'
        style={inputStyle}
        onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
        onBlur={(e) => Object.assign(e.target.style, inputStyle)}
    />
  </div>
     <button 
        type="submit" 
        class="btn btn-primary" 
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

export default Login