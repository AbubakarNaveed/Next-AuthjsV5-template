import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

const credentialsConfig = CredentialsProvider({
  name: "Credentials",
  credentials: {
    username: {
      label: "User Name",
    },
    password: {
      label: "Password",
      type: "password",
    },
  },
  async authorize(credentials) {
    //write the logic for the login here
    if (credentials) {
      const { username } = credentials;
      return {
        name: `${username}`,
      };
    } else {
      return null;
    }
  },
});

const config = {
  providers: [Google, credentialsConfig],
} satisfies NextAuthConfig;

export const {
  handlers: { GET, POST },
  signIn,
  auth,
  signOut,
} = NextAuth(config);
