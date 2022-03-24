import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorizationUrl: "https://accounts.google.com/o/oauth2/auth",
    } as any)
  ],
  database: process.env.DB_URL as string,
  session: {
    jwt: true
  } as any,
  jwt: {
    encription: true,
    secret: '342rytrg34y98'
  } as any,
  callbacks: {
    async signIn({ account, profile }:any):Promise<boolean> {
      if (account.provider === "google" && profile.email_verified === true && profile.email && profile.email.endsWith('@example.com')) {
        return true
      } else {
        return false
      }
    },
    redirect: async ({url, baseUrl}:any) => {
      return Promise.resolve('/admin')
    }
  },
  secret: 'ewledwlfmqwdm'
} as any)