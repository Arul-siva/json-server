import axios from 'axios';
import React, { useState } from 'react';

const FetchDataComponent = () => {
  const [formData, setFormData] = useState({ name: "", email: "", username: "" });
  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]:value,});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

      await axios.post("http://localhost:8000/users", formData);
      setResponseMessage("User added successfully!");
      setErrorMessage("");
      setFormData({ name: "", email: "", username: "" });
  }

  return (
    <div>
      <form className='ms-5' onSubmit={handleSubmit}>
        <label htmlFor="username">User Name: </label> <br />
        <input type="text" name='username' id='username' onChange={handleChange} value={formData.username} /><br />

        <label htmlFor="name">Name: </label> <br />
        <input type="text" name='name' id='name' onChange={handleChange} value={formData.name} /><br />

        <label htmlFor="email">Email: </label> <br />
        <input type="email" name='email' id='email' onChange={handleChange} value={formData.email} /><br />

        <button className="btn btn-success mt-4" type='submit'>Add</button>
      </form>
      {responseMessage && <p className="success-message">{responseMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default FetchDataComponent;
