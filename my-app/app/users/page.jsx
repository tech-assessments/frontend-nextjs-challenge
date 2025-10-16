"use client";
import CustomTable from "@/components/CustomTable";
import Loader from "@/components/Loader";
import { fetchUsers } from "@/services/userApi";
import { useRouter } from "next/navigation";
import useSWR from "swr";

const userFetcher = () => fetchUsers();

export default function Users() {
  const router = useRouter();
  const { data: users, error } = useSWR("users", userFetcher);

  const columns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "company", label: "Company", render: (user) => user.company.name },
  ];

  if (!users && !error) return <Loader text="Loading users..." />;
  if (error) return <Error message="Error fetching data..." />;

  return (
    <div className="p-4 mx-auto max-w-4xl">
      <h1 className="text-center text-2xl my-5">User List</h1>
      <CustomTable
        columns={columns}
        data={users}
        onRowClick={(user) => router.push(`/users/${user.id}`)}
      />
    </div>
  );
}
