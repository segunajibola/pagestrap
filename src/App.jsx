import "./App.css";
import {
  Navbar,
  About,
  Hero,
  Services,
  Portfolio,
  Testimonial,
  Footer,
} from "./section";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
