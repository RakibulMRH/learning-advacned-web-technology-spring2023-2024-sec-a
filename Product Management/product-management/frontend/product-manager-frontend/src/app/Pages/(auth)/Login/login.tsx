'use client';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { authService } from '../../../services/auth.service';
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {
  const router = useRouter();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
  console.log('handleLogin started'); // Log when function starts
  try {
    console.log('Attempting to login'); // Log before login attempt
    const { access_token, user } = await authService.login({ email, password });
    console.log('Login successful'); // Log after successful login

    console.log('Setting token in cookies'); // Log before setting token
    Cookies.set('token', access_token);
    console.log('Token set in cookies'); // Log after setting token

    console.log('Checking user role'); // Log before checking user role
    if (user.role === 'admin') {
      console.log('User is admin, redirecting to /products'); // Log if user is admin
      router.push('/products');
    } else {
      console.log('User is not admin, redirecting to /'); // Log if user is not admin
      router.push('/');
    }
  } catch (error) {
    console.error('Error in handleLogin:', error); // Log any errors
  }
};

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;