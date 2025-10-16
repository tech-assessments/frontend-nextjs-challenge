import { User } from '../types/user';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

// Custom fetch wrapper with error handling
const fetchApi = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const response = await fetch(`${API_BASE_URL}${url}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new ApiError(response.status, `HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const userService = {
  // Get all users
  getUsers: async (): Promise<User[]> => {
    try {
      return await fetchApi<User[]>('/users');
    } catch (error) {
      console.error('Failed to fetch users:', error);
      throw error;
    }
  },

  // Get user by ID
  getUserById: async (id: number): Promise<User> => {
    try {
      return await fetchApi<User>(`/users/${id}`);
    } catch (error) {
      console.error(`Failed to fetch user ${id}:`, error);
      throw error;
    }
  },

  // Create new user
  createUser: async (user: Omit<User, 'id'>): Promise<User> => {
    try {
      return await fetchApi<User>('/users', {
        method: 'POST',
        body: JSON.stringify(user),
      });
    } catch (error) {
      console.error('Failed to create user:', error);
      throw error;
    }
  },

  // Update user
  updateUser: async (id: number, user: Partial<User>): Promise<User> => {
    try {
      return await fetchApi<User>(`/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
      });
    } catch (error) {
      console.error(`Failed to update user ${id}:`, error);
      throw error;
    }
  },

  // Delete user
  deleteUser: async (id: number): Promise<void> => {
    try {
      await fetchApi(`/users/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.error(`Failed to delete user ${id}:`, error);
      throw error;
    }
  },
};