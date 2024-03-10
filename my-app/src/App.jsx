import './App.css';
import {useState} from 'react';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Program from './components/Program/Program';
import Testimonials from './components/Testimonials/Testimonials';
import Title from './components/Title/Title';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

function App() {


  const[playState, setPlayState] = useState(false)

  function togglePlay() {




    
  }




  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subtitle="Our Program" title="What We Offer"/>
        <Program/>
        <About setPlayState={setPlayState}/>
        <Title subtitle="Gallery" title="Campus Photos"/>
        <Campus/>
        <Title subtitle="TESTIMONIALS" title="What Student Says"/>
        <Testimonials/>
        <Title subtitle="Contact Us" title="Get in Touch"/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
      
      
    </div>
  );
}

export default App;
