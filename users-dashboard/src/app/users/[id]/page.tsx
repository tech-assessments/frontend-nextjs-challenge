import { getUserById } from "@/lib/api/users";
import BackTo from "@/components/BackTo";
import { FiMail, FiGlobe, FiMapPin, FiBriefcase } from "react-icons/fi";
import { Metadata } from "next";

interface UserPageProps {
  params: { id: string };
}

export const metadata: Metadata = {
    title: "User Page",
  };
  
export default async function UserPage({ params }: UserPageProps) {
  const user = await getUserById(Number(params.id));

  if (!user) {
    return (
      <div className="text-center py-10 text-neutral">User not found.</div>
    );
  }

  return (
    <section className="max-w-2xl mx-auto py-10 px-4 space-y-6">
      <BackTo url="/users" />

      <div className="bg-base rounded-xl shadow-md p-6 space-y-4">
        <h1 className="text-3xl font-semibold text-primary">{user.name}</h1>

        <div className="space-y-2 text-foreground/80">
          <p className="flex items-center gap-2">
            <FiMail className="text-secondary" /> {user.email}
          </p>

          <p className="flex items-center gap-2">
            <FiBriefcase className="text-secondary" />{" "}
            <span className="font-medium">{user.company.name}</span>
          </p>

          <p className="flex items-center gap-2">
            <FiGlobe className="text-secondary" />
            <a
              href={`https://${user.website}`}
              target="_blank"
              className="hover:underline"
            >
              {user.website}
            </a>
          </p>

          <p className="flex items-center gap-2">
            <FiMapPin className="text-secondary" />
            {user.address.city}, {user.address.street}
          </p>
        </div>
      </div>
    </section>
  );
}
