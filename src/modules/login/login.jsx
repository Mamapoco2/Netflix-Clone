import React from "react";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>Email:</label>
        <input type="email" name="email" required />
        <br />
        <label>Password:</label>
        <input type="password" name="password" required />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
