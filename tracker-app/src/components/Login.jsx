import { useState } from "react";

function Login({ setPage, setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      setPage("admin");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const savedUser = users.find(
      (user) =>
        user.username === username &&
        user.password === password
    );

    if (savedUser) {
      setCurrentUser(savedUser.username);
      setPage("dashboard");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="form-box">
      <h2>Login</h2>

      <form onSubmit={loginUser}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      <p>Admin: admin / admin123</p>
    </div>
  );
}

export default Login;