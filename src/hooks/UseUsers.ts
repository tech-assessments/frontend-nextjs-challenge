'use client';
import { useQuery } from '@tanstack/react-query';
import { fetcher } from '@/lib/api';
import type { User } from '@/lib/types';

export function useUsers() {
  return useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: () => fetcher<User[]>('/users'),
    staleTime: 0
   
  });
}