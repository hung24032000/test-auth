import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"

export const authOptions: NextAuthOptions = {
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID as string,
      clientSecret:process.env.NEXT_PUBLIC_SECRET_FACEBOOK_SECRET as string,

    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_SECRET_GOOGLE_SECRET as string,
    }),
  ],
  callbacks: {
    async redirect({baseUrl}) {
      return baseUrl
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  theme: {
    colorScheme: "light",
  },
}

export default NextAuth(authOptions)
