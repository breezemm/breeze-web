import NextAuth, { NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";

const credentialsConfig = credentials({
  name: "Credentials",
  credentials: {
    email: {
      label: "User Email",
      type: "email",
    },
    password: {
      label: "User Eassword",
      type: "password",
    },
  },
  async authorize(credentials, req) {
    const { email, password } = credentials as {
      email: string;
      password: string;
    };
    if (email !== "aungmyatmoe@gmail.com" && password !== "password") {
      return null;
    } else return { email: "aungmyatmoe@gmail.com", password: "password" };
  },
});

const config = {
  providers: [credentialsConfig],
  //   pages: {
  //     signIn: "/olduser/login",
  //   },
  pages: {
    signIn: "/olduser/login",
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
