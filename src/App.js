import './App.css';

import { BrowserRouter,Route,Routes } from 'react-router-dom';  
import AnimatedCursor from "react-animated-cursor"

import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Contact from './Components/Contact'
import Exp from './Components/Exp';
import Project from './Components/Projects'
import Skills from './Components/Skills'
import About from './Components/About';

function App() {
  return (
    <>
    <AnimatedCursor
    innerSize={13}
    outerSize={15}
    color='179, 57, 226'
    outerAlpha={0.3}
    innerScale={0.7}
    outerScale={5}
    showSystemCursor={true}
    clickables={[
      'a',
      'input[type="text"]',
      'input[type="email"]',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      'label[for]',
      'select',
      'textarea',
      'button',
      '.link'
    ]}
    />
    <BrowserRouter basename='/sujit'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/experience' element={<Exp/>}></Route>
        <Route path='/project' element={<Project/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
