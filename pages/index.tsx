import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ocean Edge Media - Web Design & Digital Marketing</title>
        <meta name="description" content="Professional web design, logo design, and social media marketing services in Nova Scotia. Transform your digital presence with Ocean Edge Media." />
        <meta name="keywords" content="web design, logo design, social media marketing, digital marketing, Nova Scotia" />
        <meta property="og:title" content="Ocean Edge Media - Digital Design & Marketing" />
        <meta property="og:description" content="Your trusted digital partner for web design, logo design, and social media marketing." />
        <meta property="og:type" content="website" />
      </Head>

      <Header />
      <Hero />
      <Clients />
      <Features />
      <Gallery />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
