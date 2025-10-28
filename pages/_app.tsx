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
      </Head>
      <LogoAnimationSplash />
      <Component {...pageProps} />
    </>
  );
}
