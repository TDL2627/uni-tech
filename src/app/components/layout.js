import Navbar from "./Navbar/index.client";
import Footer from "./Footer/index.client";
import { Poppins } from "next/font/google";

const poppy = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: "600",
});
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={`${poppy.variable} min-h-screen `}>{children}</main>
      <Footer />
    </>
  );
}
