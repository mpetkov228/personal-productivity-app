import axios from "axios";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8000/api/auth/register', {
        email,
        username,
        password
      });
      navigate('/');
    } catch (err) {
      alert('Registration failed!');
    }
  };

  if (localStorage.getItem('token')) {
    return <Navigate replace to="/dashboard" />
  }

  return (
    <div className="flex h-screen w-screen justify-center items-center bg-gray-100">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded shadow-md w-100">
        <h2 className="text-xl font-bold mb-1">Create Your Account</h2>
        <p className="text-xs mb-4">Track your tasks, habits and focus time - all in one place.</p>
        <input
          type="email"
          placeholder="Email"
          className="mb-4 w-full p-2 border rounded"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          className="mb-4 w-full p-2 border rounded"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 w-full p-2 border rounded"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="mb-4 w-full p-2 border rounded"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full cursor-pointer">Log in</button>
      </form>
    </div>
  );
}