import { Suspense } from "react";
import Loading from "../loading";
import UsersPage from "../components/userPage";



export default async function Users() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      cache: "no-store",
    });
    
    if (!res.ok) throw new Error("خطا در دریافت کاربران");
    
    const users = await res.json();

    return (
      <Suspense fallback={<Loading />}>
        <UsersPage users={users} />
      </Suspense>
    );
  } catch (error) {
    throw error;
  }
}