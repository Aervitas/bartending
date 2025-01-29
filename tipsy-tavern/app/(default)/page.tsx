export const metadata = {
  title: "Tipsy Tavern Home",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Logo from "@/components/ui/logo";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
    </>
  );
}
