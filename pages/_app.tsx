import type { AppProps } from 'next/app'
import '../styles.css'
import { I18nProvider } from '@/lib/i18n'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <I18nProvider>
      <Component {...pageProps} />
    </I18nProvider>
  )
}
