import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Inter } from 'next/font/google'
import { AppProps } from 'next/app';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  Component,
  pageProps,
}: AppProps) {
  return (
    
      <Component {...pageProps} />
    
  )
}