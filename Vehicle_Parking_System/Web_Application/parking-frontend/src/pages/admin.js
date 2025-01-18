import React, { useState } from "react";
import NavBar from '../componets/navbar';

const Admin = () => {
  const [password, setPassword] = useState(""); // Use state to store the password input
  const admin_password = "123"; // Correct password

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission (refresh)
    
    if (password === admin_password) {
      // Redirect to the Admin Panel if the password matches
      window.location.href = "/admin-panel"; // Make sure AdminPanel is the correct URL
    } else {
      // Show an alert or error message for incorrect password
      alert("Incorrect password!");
    }
  };

  return (
    <div>
      <NavBar/>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update the password state on input change
          placeholder="Enter Password"
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Admin;
