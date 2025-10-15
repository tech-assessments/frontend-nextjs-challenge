'use client';

import { useQuery } from '@tanstack/react-query';
import { User } from '../lib/types'; 
import { fetcher } from '../lib/api';

export function useUsers() {
  return useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: () => fetcher<User[]>('/users'),
  
  });
}