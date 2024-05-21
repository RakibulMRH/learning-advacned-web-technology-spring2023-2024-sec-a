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
    try {
      const { access_token, user } = await authService.login({ email, password });
      Cookies.set('token', access_token);

      if (user.role === 'admin') {
        router.push('./products');
      } else {
        router.push('./login');
      }
    } catch (error) {
      console.error('Error in handleLogin:', error);
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