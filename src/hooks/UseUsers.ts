'use client';


export function useUsers() {
  return useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: () => fetcher<User[]>('/users'),
    staleTime: 0
   
  });
}