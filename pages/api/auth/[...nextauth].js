import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbacks: {
            async signIn({ account, profile }) {
              console.log('jkfbweij', account, profile);
              if (account.provider === "google") {
                return profile.email_verified === true && profile.email.endsWith('@example.com')
              } else {
                return false
              }
        //   return true
            },
          }
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
  secret: process.env.secret
})