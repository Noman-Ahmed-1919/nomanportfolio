import { BrowserRouter, } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

import "./App.css";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
            <About/>
            <Experience />
            <Tech />
            <Works />
            <Contact />
            <Footer/>
            <Whatsapp/>
            
          </div>
          <div className="relative z-0">
            <StarsCanvas />
          </div>          
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
