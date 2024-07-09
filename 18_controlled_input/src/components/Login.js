import React, { useState } from 'react';

export default function Login() {
  const [data, setData] = useState({ username: '', password: '' });

  function handleFormSubmit(event) {
    event.preventDefault();

    console.log(data);
    alert(JSON.stringify(data));
  }

  function handleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value });
  }
  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="">
          Username:
          <input
            type="text"
            value={data.username}
            onChange={(e) => handleInputChange(e, 'username')}
          />
        </label>

        <label htmlFor="">
          Password:
          <input
            type="passwort"
            value={data.password}
            onChange={(e) => handleInputChange(e, 'password')}
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </>
  );
}
