import React, { useState } from "react";
import emailjs from 'emailjs-com'
const Popup = () => {
  // Inline style objects
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  };

  const labelStyle = {
    marginBottom: "8px",
    fontSize: "16px",
    color: "#333",
  };

  const inputStyle = {
    marginBottom: "12px",
    padding: "8px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    outline: "none",
    transition: "border-color 0.3s",
  };

  const inputFocusStyle = {
    borderColor: "#007bff",
  };

  const buttonStyle = {
    padding: "10px 15px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
  };


   const [formData, setformData] = useState({name:"",email:"" ,number:""})

   const handleSubmit =(e)=>{
    
      e.preventDefault();
  
       emailjs.send('service_zfvuz3t','template_9j1t11i',formData,'DPaxvpxbEUxBsz-N2')

       alert("successfully sent")
       setformData({name:"" ,phone:"", email:""})
   }

  const handleChange =(e)=>{
    e.preventDefault();
    const {name , value} = e.target;
    setformData({...formData , [name] : value})
     
  }
    
  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Form</h1>

      <label htmlFor="name" style={labelStyle}>
        Name:
      </label>
      <input type="text" name="name" id="name" style={inputStyle} onChange={handleChange} value={formData.name} />

      <label htmlFor="phone" style={labelStyle}>
        Phone:
      </label>
      <input type="number" name="phone" id="phone" style={inputStyle}  onChange={handleChange} value={formData.phone} />

      <label htmlFor="email" style={labelStyle}>
        Email:
      </label>
      <input type="email" name="email" id="email" style={inputStyle} onChange={handleChange} value={formData.email} />

      <button
        type="submit"
        style={buttonStyle}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)
        }
        onMouseOut={(e) =>
          (e.target.style.backgroundColor = buttonStyle.backgroundColor)
        }
      >
        Submit
      </button>
    </form>
  );
};

export default Popup;
