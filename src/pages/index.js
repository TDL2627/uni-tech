import HowToRentAFridge from "@/app/components/HowTo";
import Landng from "@/app/components/landing/index.client";
import About from "@/app/components/pages/About";
import ContactForm from "@/app/components/pages/Contact";
import Products from "@/app/components/pages/Products";
import Testimonials from "@/app/components/pages/Testimonials";
export default function Home() {
  return (
    <>
      <Landng />
      <About />
      {/* <Products /> */}
      <HowToRentAFridge/>
      <Testimonials />
      <ContactForm />
    </>
  );
}
