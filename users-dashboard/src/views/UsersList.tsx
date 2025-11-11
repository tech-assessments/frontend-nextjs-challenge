"use client";

import type { User } from "@/types/user";
import { useState } from "react";
import Link from "next/link";

interface UsersListProps {
  users: User[];
}

export default function UsersList({ users }: UsersListProps) {
  const [filter, setFilter] = useState("");

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="space-y-6">

      <div className="relative">
        <input
          type="text"
          placeholder="🔍 Search users..."
          className="w-full p-3 rounded-xl border border-neutral/50 focus:ring-2 focus:ring-primary/60 focus:border-primary/60 outline-none transition-all bg-base text-foreground placeholder:text-neutral"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div className="max-h-[65vh] overflow-auto scrollbar-thin scrollbar-thumb-neutral/40 scrollbar-track-transparent">
        <ul className="space-y-3">
          {filtered?.map((user) => (
            <li
              key={user.id}
              className="bg-base rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-[2px] transition-all duration-200"
            >
              <Link href={`/users/${user?.id}`} className="block p-4 group">
                <p className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                  {user?.name}
                </p>
                <p className="text-sm text-neutral">{user?.email}</p>
                <p className="text-xs text-foreground/70 mt-1">
                  {user?.company?.name}
                </p>
              </Link>
            </li>
          ))}

          {filtered.length === 0 && (
            <p className="text-center text-neutral py-10">No users found.</p>
          )}
        </ul>
      </div>
    </div>
  );
}
