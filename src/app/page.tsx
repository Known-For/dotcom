import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatWeMake from "@/components/WhatWeMake";
import ProcessStack from "@/components/ProcessStack";
import FounderNote from "@/components/FounderNote";
import IsThisForYou from "@/components/IsThisForYou";
import ValueProps from "@/components/ValueProps";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <Nav />
      <Hero />
      <WhatWeMake />
      <ProcessStack />
      <FounderNote />
      <IsThisForYou />
      <ValueProps />
      <ContactForm />
      <Footer />
    </main>
  );
}
