import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import About from './About/About'
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import StartReact from './StartReact/StartReact'
import Footer from './Footer/Footer'; 
function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path='about' element={<About/>}/>
        <Route path='portfolio' element={<Portfolio/>}/> 
        <Route path='contact' element={<Contact/>}/>
        <Route path='start_react' element={<StartReact/>}/> 
        <Route path='/' element={<StartReact/>}/> 
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
