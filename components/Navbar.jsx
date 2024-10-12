'use client'


import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const {status} = useSession();

  return (
    <div className="flex justify-between items-center p-6 rounded-b-xl shadow-xl select-none">
      <Link href={"/"} className="text-slate-600 font-bold text-xl shadow-sm ">
        ObiTech
      </Link>
      <div>
        {status === "authenticated" ? (
          <button
            onClick={() => signOut()}
            className="px-4 py-2 bg-slate-900 rounded-xl text-white font-semibold"
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={() => signIn("google")}
            className="px-4 py-2 bg-slate-900 rounded-xl text-white font-semibold"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}
