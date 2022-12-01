import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    if (event.target.type === "checkbox") {
      setFormData({ ...formData, [name]: event.target.checked });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
      name="firstName"
      onChange={handleChange} value={formData.firstName} />

      <input type="text"
      name="lastName"
      onChange={handleChange} value={formData.lastName} />

      <input type="checkbox"
      name="admin"
      onChange={handleChange}
      checked={formData.admin} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
