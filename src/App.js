import './App.css';

import { BrowserRouter,Route,Routes } from 'react-router-dom';  
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Contact from './Components/Contact'
import Exp from './Components/Exp';
import Project from './Components/Projects'
import Skills from './Components/Skills'
import About from './Components/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/sujit' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/experience' element={<Exp/>}></Route>
        <Route path='/project' element={<Project/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
