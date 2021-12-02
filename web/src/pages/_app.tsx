import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Global } from '@emotion/react'

import globalStyles from 'styles/global'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Boilerplate Create Next App</title>
        <meta
          name="description"
          content="Boilerplate created using create next app"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="apple-touch-icon" href="/favicon.ico" /> */}
      </Head>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  )
}

export default App
