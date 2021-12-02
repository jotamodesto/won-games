import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Global, ThemeProvider } from '@emotion/react'

import globalStyles from 'styles/global'
import theme from 'styles/theme'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}

export default App
