import { User } from '../types/user.types';

export const usersService = {
  getUsers: async (): Promise<User[]> => {
    // Send a request to the backend to get all users
    const response = await fetch('/api/users');
    const data = await response.json();

    if (response.ok) {
      return data.users;
    } else {
      throw new Error(data.message);
    }
  },

  getUserById: async (id: string): Promise<User> => {
    // Send a request to the backend to get a user by ID
    const response = await fetch(`/api/users/${id}`);
    const data = await response.json();

    if (response.ok) {
      return data.user;
    } else {
      throw new Error(data.message);
    }
  },
};