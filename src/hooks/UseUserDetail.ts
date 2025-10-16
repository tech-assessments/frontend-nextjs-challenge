'use client';
import { useQuery } from '@tanstack/react-query';
import { fetcher } from '@/lib/api';
import type { User } from '@/types/types';

export function useUserDetail(id?: string | number) {
  return useQuery<User, Error>({
    queryKey: ['user', id],
    queryFn: () => fetcher<User>(`/users/${id}`),
    enabled: !!id,
  
  });
}