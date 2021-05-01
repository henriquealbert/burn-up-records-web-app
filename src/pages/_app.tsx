import { AppProps } from 'next/app'
import Head from 'next/head'

import { ConfigProvider } from 'antd'
import pt_BR from 'antd/lib/locale/pt_BR'
import 'antd/dist/antd.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider locale={pt_BR}>
      <Head>
        <title>Burn Up Records</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Ajudamos a lançar sua track em tempo recorde e sem burocracias."
        />
      </Head>
      <Component {...pageProps} />
    </ConfigProvider>
  )
}

export default App
