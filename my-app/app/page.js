import Button from "@/components/Button";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-20 gap-6">
        <h2 className="text-3xl font-bold text-gray-700">
          Welcome to the User Dashboard
        </h2>
        <p className="text-gray-500 text-lg">
          Manage your users easily and efficiently.
        </p>
        <Link href="/users"><Button text="Go to Users Page" icon={<FaUser/>} bgColor="#414a8e"/></Link>
      </div>
    </>
  );
}
