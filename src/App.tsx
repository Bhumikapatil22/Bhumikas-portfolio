import  { useEffect } from 'react';
import About from './components/About';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import EventTimeline from './components/EventTimeline';
function App() {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  

  return (
    <div className="min-h-screen bg-black text-gray-100 relative">
      {/* Video Background
      <div className="fixed inset-0 w-full h-full z-0">
        <div className="absolute inset-0 animate-fadeIn backdrop-blur-md bg-black/30 z-10"></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-35"
        >
          <source src="/v1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}

      {/* Content Container */}
      <div className="fixed inset-0 w-full h-full z-0">
        <div className="absolute inset-0 animate-fadeIn backdrop-blur-md bg-black/30 z-10"></div>
        
      <img src="bg.avif" className="w-full h-full object-cover opacity-20"></img>
      </div>
      <div className="relative z-20">
      <Navigation />
      <Hero /> 
      <About />
      <EventTimeline />
      <Skills />
      <Project />
      <Contact />
      <Footer />   
      </div>
    </div>
  );
}

export default App;