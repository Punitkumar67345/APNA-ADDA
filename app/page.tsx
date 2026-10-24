import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import TodaysSpecials from "@/components/home/TodaysSpecials";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
         <TodaysSpecials />
      </main>
    </>
  );
}