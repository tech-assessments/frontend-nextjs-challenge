
import { Suspense } from "react";
import Loading from "./loading";
import HomePage from "./components/hoemPage";

export default async function Home() {
  try {
    const [usersResponse, postsResponse] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users", {
        cache: "no-store",
      }),
      fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "no-store",
      })
    ]);

    if (!usersResponse.ok) throw new Error('خطا در دریافت کاربران');
    if (!postsResponse.ok) throw new Error('خطا در دریافت پست‌ها');


    const [users, posts] = await Promise.all([
      usersResponse.json(),
      postsResponse.json()
    ]);

    return (
      <Suspense fallback={<Loading />}>
        <HomePage posts={posts} users={users} />
      </Suspense>
    );
  } catch (error) {
    throw error;
  }
}