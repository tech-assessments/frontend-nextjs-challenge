import DetailUserPage from "@/app/components/detail/detailUserPage";
import Loading from "@/app/loading";
import { Suspense } from "react";

export default async function UserDetail({ params }) {
  const { userId } = await params;
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      {
        cache: "force-cache",
      }
    );

    if (!res.ok) throw new Error("خطا در دریافت  جزییات کاربران");

    const users = await res.json();

    return (
      <Suspense fallback={<Loading />}>
        <DetailUserPage users={users} />
      </Suspense>
    );
  } catch (error) {
    throw error;
  }
}
