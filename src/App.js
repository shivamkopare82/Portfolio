
import './App.css';
import  "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="container">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
