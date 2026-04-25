import type { AppProps } from 'next/app'
import Script from 'next/script'
import '../styles.css'
import { I18nProvider } from '@/lib/i18n'

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export default function App({ Component, pageProps }: AppProps) {
  return (
    <I18nProvider>
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      {gaId ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true});`}
          </Script>
        </>
      ) : null}
      <main id="main-content" tabIndex={-1}>
        <Component {...pageProps} />
      </main>
    </I18nProvider>
  )
}
