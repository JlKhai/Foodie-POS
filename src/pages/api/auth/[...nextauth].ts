import { config } from "@/utils/config";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: config.gooleClientId,
      clientSecret: config.googleClientSecret,
    }),
  ],
};

export default NextAuth(authOptions);
