import '@/styles/globals.css'
import { McLaren } from '@next/font/google'

const font = McLaren({ weight: "400", subsets: ["latin"] })

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  );
}