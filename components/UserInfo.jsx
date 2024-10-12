"use client";

import SignIn from "./SignIn";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { status, data: session } = useSession();

  if (status === "authenticated") {
    return (
      <div className="flex flex-col justify-center items-center h-screen -mt-24">
        <h1 className="text-3xl font-bold text-center">
          Welcome {session.user.name}!
        </h1>
        <p className="text-sm text-gray-600">
          Your email: {session.user.email}
        </p>
        <p className="text-sm text-gray-600">
          Your password: {session.user.password}
        </p>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center h-screen -mt-24">
        <SignIn />
      </div>
    );
  }
}
