import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
    <title>Johan Eriksson - jeksn.me</title>
    <link rel="icon" href="/favicon.ico" />
    <script async defer data-website-id="4523f431-eed9-4deb-a867-24ef52eb5d5d" src="https://umami-mu-nine.vercel.app/umami.js"></script>
  </Head>
  
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
