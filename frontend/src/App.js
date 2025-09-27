import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Slider from './components/slider/Slider';
import AboutUs from './components/aboutus/Aboutus';
import Service from './components/service/Services.jsx';
import Testimony from './components/testimony/Testimony.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Slider />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="services">
        <Service />
      </section>
      <section id="testimony">
        <Testimony />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
