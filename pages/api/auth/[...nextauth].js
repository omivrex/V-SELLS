import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        authorizationUrl:"https://accounts.google.com/o/oauth2/auth",
    })
  ],
  database: process.env.DB_URL,
  session: {
    jwt: true
  },
  jwt: {
    encription: true,
    secret: '342rytrg34y98'
  },
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        return profile.email_verified === true && profile.email.endsWith('@example.com')
      } else {
        return false
      }
        return true
    },
    redirect: async (url, _baseUrl) => {
        return Promise.resolve('/admin')
    }
  },
  secret: 'ewledwlfmqwdm'
})