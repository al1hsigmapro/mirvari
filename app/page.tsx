import Hero from "@/components/hero";
import About from "@/components/about";
import Features from "@/components/features";
import Menu from "@/components/menu";
import Chef from "@/components/chef";
import Gallery from "@/components/gallery";
import Banquets from "@/components/banquets";
import Reviews from "@/components/reviews";
import FAQ from "@/components/faq";
import Contacts from "@/components/contacts";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Menu />
      <Chef />
      <Gallery />
      <Banquets />
      <Reviews />
      <FAQ />
      <Contacts />
      <Footer />
    </>
  );
}
