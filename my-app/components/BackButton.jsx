"use client";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";

export default function BackButton() {
  const router = useRouter();
  return (
    <Button
      text="Back to user page"
      icon={<BiArrowBack />}
      bgColor="#414a8e"
      onClick={() => router.push("/users")}
    />
  );
}
