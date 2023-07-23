import Navbar from "./Navbar/index.client";
import Footer from "./Footer/index.client";
export default function Layout({ children }) {
    return (
      <>
        {/* <Navbar /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </>
    )
  }