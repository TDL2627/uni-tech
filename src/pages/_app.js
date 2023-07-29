import Layout from "@/app/components/layout";
import "@/app/globals.css";
import AOS from "aos"; // Import the AOS library
import "aos/dist/aos.css";
import { useEffect } from "react";
import Head from "next/head";
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>UniTech</title>
        <link rel="icon" href="/images/untech-logo.png" />
        <meta property="og:image:alt" content="UniTech Header" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
