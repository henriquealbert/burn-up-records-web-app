import { AppProps } from 'next/app';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ElCubo.dev</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Ajudamos sua empresa crescer desenvolvendo softwares ágeis e personalizados."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
