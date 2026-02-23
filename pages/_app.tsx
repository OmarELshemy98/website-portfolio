import type { AppProps } from 'next/app'
import '../styles.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <link rel="icon" href="/images/circle-logo.png" type="image/png" />
      <Component {...pageProps} />
    </>
  )
}
