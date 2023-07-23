import Layout from "@/app/components/layout";
import "@/app/globals.css";
import AOS from "aos"; // Import the AOS library
import { useEffect } from "react";
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
