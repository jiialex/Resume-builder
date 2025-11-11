import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/login.css';
import Input from '../../Components/inputs/input.jsx';
import { validateEmail } from '../../utils/helper.js';

function Login({ setCurrentPage, setOpenAuthModal }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      console.log('Logging in with:', email, password);
      setOpenAuthModal(false);
      navigate('/builder');
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2 className="text-xl font-semibold text-center mb-1">Welcome Back</h2>
      <p className="text-sm text-gray-600 text-center mb-4">
        Please enter your details to log in
      </p>

      <form onSubmit={handleLogin} className="login-form space-y-4">
        {error && <p className="login-error text-red-500 text-sm text-center">{error}</p>}

        <Input
          type="email"
          placeholder="john@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email Address"
        />

        <Input
          type="password"
          placeholder="min-8-char"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          LOGIN
        </button>

        <div className="signup-link text-sm text-center text-gray-700">
          Don't have an account?{' '}
          <button
            type="button"
            className="text-blue-600 hover:underline"
            onClick={() => setCurrentPage('signup')}
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
