import React, {useState, useEffect, useContext} from "react"
import './App.css';
import Cover from "./components/cover/Cover";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/about";
import Slider from "./components/slider/Slider";
import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";

import { langContext } from './context/langContext';


function App() {
  const idioma = useContext(langContext)
  const [scrollHeight, setScrollHeight] = useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [scrollHeight])

  return (

    
      <div className="App">
          <Navbar scroll={scrollHeight} />
          <Cover />
          <About />
          <Slider />
          <Info />
          <Footer />
      </div>
    
  );
}

export default App;
