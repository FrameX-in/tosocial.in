import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/libs/mongoClient";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
