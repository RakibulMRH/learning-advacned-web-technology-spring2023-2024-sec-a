import { User } from '../types/user.types';

export const authService = {
  isAuthenticated: () => {
    let token;
    if (typeof window !== 'undefined') {
      token = window.localStorage.getItem('token');
    }
    return !!token;
  },

login: async (credentials: { email: string; password: string }): Promise<{ access_token: string; user: { id: number; email: string; role: string; } }> => {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();

    // Store the access_token in local storage
    localStorage.setItem('token', data.access_token);

    // Return the access_token and user data
    return { access_token: data.access_token, user: data.user };
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
},
  register: async (user: { email: string; password: string; name: string }) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      console.log('Register response:', data);

      if (!response.ok) {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Register error:', error);
    }
  },

  logout: async () => {
    localStorage.removeItem('token');
  },

  getUser: async (): Promise<User | null> => {
    // Send a request to the backend to get the current user
    const token = localStorage.getItem('token');

    if (!token) {
      return null;
    }

    try {
        const response = await fetch('/api/auth/me', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
  
        const data = await response.json();
        console.log('Get user response:', data);
  
        if (response.ok) {
          return data.user;
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        console.error('Get user error:', error);
      }
        return null;
    },
  };