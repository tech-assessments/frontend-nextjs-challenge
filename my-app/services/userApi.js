import axios from "axios";

export const fetchUsers = async () => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return data;
  } catch (err) {
    throw new Error("Failed to fetch users");
  }
};

export const fetchUserById = async (id) => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return data;
  } catch (err) {
    throw new Error("Failed to fetch user");
  }
};
