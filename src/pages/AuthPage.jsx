import React, { useState } from "react";

function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    console.log({
      email,
      password,
    });
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          🏋️
        </div>

        <h1>Gym Management System</h1>

        <p className="auth-subtitle">
          Login to continue
        </p>

        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>

            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AuthPage;