import HowToRentAFridge from "../app/components/HowTo/index";
import Landng from "../app/components/landing/index.client";
import About from "../app/components/pages/About";
import Products from "../app/components/pages/Products";
import Testimonials from "../app/components/pages/Testimonials";
import ContactForm from "../app/components/pages/Contact";
export default function Home() {
  return (
    <>
      <Landng />
      <About />
      <Products />
      <HowToRentAFridge/>
      <Testimonials />
      <ContactForm />
    </>
  );
}
