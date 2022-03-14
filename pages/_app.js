import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  <Script async defer data-website-id="4523f431-eed9-4deb-a867-24ef52eb5d5d" src="https://umami-mu-nine.vercel.app/umami.js" />
  return <Component {...pageProps} />
}

export default MyApp
