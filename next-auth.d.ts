import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    firenaseToken?: string;
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}
