import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  // This will cause a runtime error - accessing undefined variable
  const errorValue = undefinedVariable.someProperty;
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}
