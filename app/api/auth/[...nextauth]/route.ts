import User from "@/models/User";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectMongoDb } from "@/lib/mongodb"

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],

  callbacks: {
    async signIn({ user, account }: { user: User; account: Account }) {
      console.log("User", user);
      console.log("Account", account);

      if (account.provider === "google") {
        const { name, email } = user;
        try {
          await connectMongoDb();

          const ExistUser = await User.findOne({ email });
         
          if(!ExistUser) {
            const res = await fetch("http://localhost:3000/api/user", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name,
                  email,
                }),
              });
    
              if (res.ok) {
                return user;
              }
          }
         
        } catch (e) {
          console.error("failed to send data", e);
        }
      }

      return user;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
