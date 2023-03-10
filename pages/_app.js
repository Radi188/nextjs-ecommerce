import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Loading from '../components/Loading'

function LoadingEffect() {
  const router = useRouter();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url) => (url !== router.asPath) && setLoading(true)
    const handleComplete = (url) => (url === router.asPath) && setTimeout(() => { setLoading(false) }, 0);
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)
    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })
  return loading && <Loading />
}



function MyApp({ Component, pageProps }) {
  return (<> <LoadingEffect /> <Component {...pageProps} /> </>)
}

export default MyApp
