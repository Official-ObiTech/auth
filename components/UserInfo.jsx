"use client";

import Image from "next/image";
import SignIn from "./SignIn";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { status, data: session } = useSession();

  if (status === "authenticated") {
    return (
      <div className="flex justify-center items-center h-screen -mt-24">
        <div className="flex flex-col shadow-xl p-8 bg-yellow-100 rounded">
          <Image
            className="rounded-full"
            src={session.user.image}
            width={60}
            height={60}
          />
          <h1 className=" text-gray-600">
            User Name <span className="font-semibold"> {session.user.name} </span>
          </h1>
   
        <p className=" text-gray-600">
          Email Address: <span className="font-semibold"> {session.user.email} </span>
        </p>
      </div>
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
