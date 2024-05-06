import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "../../../db/mongodb";
import dbConnect from "../../../db/connect";
import User from "../../../db/models/User";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username:", type: "text" },
        password: {
          label: "Password:",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (
          credentials.name === "plotdata" &&
          credentials.password === "plotdata"
        ) {
          return { name: "plotdata", email: "plotdata@gmail.com" };
        } else {
          return null;
        }
      },
    }),
  ],

  adapter: MongoDBAdapter(clientPromise),
  session: { strategy: "jwt" },
  callbacks: {
    async session({ session, user }) {
      dbConnect();

      const currentUser = await User.findById(user.id);

      if (currentUser.favoritePonies == null) {
        currentUser.favoritePonies = [];

        currentUser.save();
      }

      return { ...session, user: { ...session.user, id: user.id } };
    },
  },
};

export default NextAuth(authOptions);
