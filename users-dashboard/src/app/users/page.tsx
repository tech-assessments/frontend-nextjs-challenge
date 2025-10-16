import { Metadata } from "next";
import { getUsers } from "@/lib/api/users";
import UsersList from "@/views/UsersList";
import BackTo from "@/components/BackTo";
export const metadata: Metadata = {
  title: "Users Page",
  description: "This page shows a list of users.",
};

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <section className=" flex-center flex-col space-y-6">
      <BackTo url="/" />
      <h1 className="text-3xl md:text-5xl font-semibold ">Users List</h1>

      <div className="w-full max-w-2xl">
        <UsersList users={users} />
      </div>
    </section>
  );
}
