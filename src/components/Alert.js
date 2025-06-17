import React from 'react'

export default function Alert(props) {

  // Inline styles
  const containerStyle = {
    height: '60px',
    position: 'relative',
    zIndex: 1000
  };

  const alertBaseStyle = {
    padding: '12px 20px',
    margin: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '0.95rem',
    fontWeight: '500',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden'
  };

  const successStyle = {
    ...alertBaseStyle,
    backgroundColor: '#d4edda',
    color: '#155724',
    borderLeft: '4px solid #28a745'
  };

  const dangerStyle = {
    ...alertBaseStyle,
    backgroundColor: '#f8d7da',
    color: '#721c24',
    borderLeft: '4px solid #dc3545'
  };

  const warningStyle = {
    ...alertBaseStyle,
    backgroundColor: '#fff3cd',
    color: '#856404',
    borderLeft: '4px solid #ffc107'
  };

  const infoStyle = {
    ...alertBaseStyle,
    backgroundColor: '#d1ecf1',
    color: '#0c5460',
    borderLeft: '4px solid #17a2b8'
  };

  const strongStyle = {
    fontWeight: '600',
    fontSize: '1rem'
  };

  // Function to get appropriate style based on alert type
  const getAlertStyle = (type) => {
    switch(type) {
      case 'success':
        return successStyle;
      case 'danger':
        return dangerStyle;
      case 'warning':
        return warningStyle;
      case 'info':
        return infoStyle;
      default:
        return alertBaseStyle;
    }
  };

  return (
    <div style={containerStyle}>
      {props.alert && 
        <div 
          className={`alert alert-${props.alert.type} alert-dismissible fade show`} 
          role="alert"
          style={getAlertStyle(props.alert.type)}
        >
          <strong style={strongStyle}>{props.alert.msg}</strong>
        </div>
      }
    </div>       
  )
}