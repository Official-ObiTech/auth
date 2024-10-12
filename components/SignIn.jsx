'use client'

import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <button
      onClick={() => signIn('google')}
      className="py-2 px-6 bg-blue-500 text-white font-semibold hover:rounded rounded-tr rounded-bl"
    >
      Sign with Google
    </button>
  );
}
