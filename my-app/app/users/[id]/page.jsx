import BackButton from "@/components/BackButton";
import ErrorBox from "@/components/ErrorBox";
import UserDetaileCard from "@/components/UserDetaileCard";
import { fetchUserById } from "@/services/userApi";

export default async function UserDetailes({ params }) {
  const id = params?.id;

  let user;
  try {
    user = await fetchUserById(id);
  } catch (err) {
    return <ErrorBox message="Failed to fetch user" />;
  }

  if (!user) return <ErrorBox message="User not found!" />;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <UserDetaileCard user={user} />

      <div className="mt-6 flex justify-center">
        <BackButton />
      </div>
    </div>
  );
}
