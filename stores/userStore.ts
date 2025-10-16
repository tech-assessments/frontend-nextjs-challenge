import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { User, UsersState } from '../types/user';
import { userService } from '../services/userService';

export const useUserStore = create<UsersState>()(
  devtools(
    (set, get) => ({
      // State
      users: [],
      selectedUser: null,
      loading: false,
      error: null,

      // Actions
      actions: {
        fetchUsers: async () => {
          set({ loading: true, error: null });
          try {
            const users = await userService.getUsers();
            set({ users, loading: false });
          } catch (error) {
            set({ 
              error: 'Failed to fetch users', 
              loading: false 
            });
          }
        },

        fetchUserById: async (id: number) => {
          set({ loading: true, error: null });
          try {
            const user = await userService.getUserById(id);
            set({ selectedUser: user, loading: false });
          } catch (error) {
            set({ 
              error: 'Failed to fetch user', 
              loading: false 
            });
          }
        },

        clearError: () => {
          set({ error: null });
        },
      },
    }),
    {
      name: 'user-storage',
    }
  )
);

// Selectors (برای performance بهتر)
export const useUsers = () => useUserStore((state) => state.users);
export const useSelectedUser = () => useUserStore((state) => state.selectedUser);
export const useLoading = () => useUserStore((state) => state.loading);
export const useError = () => useUserStore((state) => state.error);
export const useUserActions = () => useUserStore((state) => state.actions);