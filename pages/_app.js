import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import 'animate.css'

function App({ Component, pageProps: { session, ...pageProps }}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default App
