import Head from 'next/head'
import { AppProps } from 'next/app'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'

import { QueryProvider } from 'graphql/client'
import customTheme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <QueryProvider>
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
      </QueryProvider>
    </ChakraProvider>
  )
}

export default App
