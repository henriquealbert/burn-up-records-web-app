import Head from 'next/head'
import { AppProps } from 'next/app'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { Provider as NextAuthProvider } from 'next-auth/client'
import { QueryProvider } from 'graphql/client'
import { AuthProvider } from 'auth'
import customTheme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <QueryProvider>
        <ChakraProvider theme={customTheme}>
          <AuthProvider>
            <Head>
              <title>Burn Up Records</title>
              <link rel="manifest" href="/manifest.json" />
              <meta
                name="description"
                content="Ajudamos a lançar sua track em tempo recorde e sem burocracias."
              />
            </Head>
            <CSSReset />
            <Component {...pageProps} />
          </AuthProvider>
        </ChakraProvider>
      </QueryProvider>
    </NextAuthProvider>
  )
}

export default App
