import { AppProps } from 'next/app'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Burn Up Records</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Ajudamos a lançar sua track em tempo recorde e sem burocracias."
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
