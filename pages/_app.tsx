import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Script from 'next/script'
import '../styles.css'
import { I18nProvider } from '@/lib/i18n'

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleStart = (url: string) => {
      if (typeof window !== 'undefined' && (window as any).showPageOverlay) {
        ;(window as any).showPageOverlay(url)
      }
    }
    const handleStop = () => {
      if (typeof window !== 'undefined' && (window as any).hidePageOverlay) {
        ;(window as any).hidePageOverlay()
      }
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

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
