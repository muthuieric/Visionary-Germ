import React, { useState } from 'react';

const Form = () => {
  const initialFormData = {
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    setFormData(initialFormData); // Reset form data to initial values
  }

  function handleChange(event) {
    const key = event.target.id;
    const value = event.target.value;
    
    setFormData({ 
      ...formData, 
      [key]: value
    });
  }

  console.log(formData);

  return ( 
      <form className='bg-white p-8 rounded shadow  w-full mt-16' onSubmit={handleSubmit}>
        <h1 className='title'>Send a Message</h1>

        <input
          type="text"
          placeholder='Enter Name:'
          id="name"
          className='w-full px-4 py-2 mb-4 rounded border focus:outline-none focus:border-purple-500'
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          placeholder='Enter Email:'
          id="email"
          className='input'
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          placeholder='Enter Phone Number:'
          id="phoneNumber"
          className='input'
          value={formData.phoneNumber}
          onChange={handleChange}
        />

        <textarea
          placeholder='Enter Message:'
          id="message"
          className='input'
          value={formData.message}
          onChange={handleChange}
          required
        />

        <input
          type="submit"
          value="Submit"
          className='w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded cursor-pointer'
        />
      </form>
  );
};

export default Form;

