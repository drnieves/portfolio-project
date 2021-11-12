import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/TestimonialsCarousel";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            color: {
              value: "#3ca6b1",
            },
            links: {
              color: "#e53278",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            shape: {
              type: "circle",
            },
            number: {
              value: 30,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
          detectRetina: true,
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
