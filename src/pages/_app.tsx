import { AppProps } from 'next/app'
import Head from 'next/head'

import { QueryProvider } from 'graphql/client'

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider>
      <Head>
        <title>Burn Up Records</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Ajudamos a lançar sua track em tempo recorde e sem burocracias."
        />
      </Head>
      <Component {...pageProps} />
    </QueryProvider>
  )
}

export default App
