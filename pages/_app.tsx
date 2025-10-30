import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import LogoAnimationSplash from '../components/LogoAnimationSplash';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ocean Edge Media - Web Design, Logo Design, and Social Media Marketing Services" />
        <title>Ocean Edge Media - Web Design & Digital Marketing</title>
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#06242d" />
      </Head>
      <LogoAnimationSplash />
      <Component {...pageProps} />
    </>
  );
}
