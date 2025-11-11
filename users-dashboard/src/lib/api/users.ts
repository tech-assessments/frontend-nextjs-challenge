import apiClient from "../axios";
import type { User } from "@/types/user";

export const getUsers = async (): Promise<User[]> => {
  const { data } = await apiClient.get<User[]>("/users");
  return data;
};

export const getUserById = async (id: number): Promise<User> => {
  const { data } = await apiClient.get<User>(`/users/${id}`);
  return data;
};
