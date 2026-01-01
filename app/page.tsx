import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Categories from "@/components/Categories";
import ForUsers from "@/components/ForUsers";
import Download from "@/components/Download";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import Background from "@/components/Background";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Background />
      <ScrollProgress />
      <div className="relative z-10" style={{ position: 'relative', zIndex: 10 }}>
        <Navbar />
        <Hero />
        <Features />
        <Stats />
        <HowItWorks />
        <Categories />
        <ForUsers />
        <Download />
        <FAQ />
        <Footer />
        <ScrollToTop />
      </div>
    </main>
  );
}
