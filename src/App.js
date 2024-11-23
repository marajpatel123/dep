import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    setLoginVisible(false); // Hide the login form after submission
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>
            <button onClick={() => setLoginVisible(!isLoginVisible)}>
              Login
            </button>
          </li>
        </ul>
      </nav>

      {isLoginVisible && (
        <form onSubmit={handleLogin} className="login-form">
          <h2>Login</h2>
          <div>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">Submit</button>
          <button type="button" onClick={() => setLoginVisible(false)}>Cancel</button>
        </form>
      )}
    </div>
  );
}

export default App;