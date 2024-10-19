import { React } from "react";
import {useNavigate} from 'react-router-dom'
import ReactTypingEffect from 'react-typing-effect';
import bg from '../Images/bg.jpg';
import Sidebar from "./Sidebar";
import Footer from './Footer'
import '../App.css';

function Home(){
    const navigate=useNavigate()
    function moreClick() {
        navigate('/about');
    }

    const texts = [
        'Software Engineer',
        'Frontend Engineer',
        'Backend Engineer',
        'Java Developer',
        'React Developer',
        'Node Developer',
        'Spring Developer'
    ];
    return(
        
            <div className="container-xl " id="home" >
                 <Sidebar/>
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={bg} className="d-block mx-lg-auto img-fluid" alt="Background" width="700" height="500" loading="lazy"/>
                </div>
                <div className="col-lg-6 animate__animated animate__fadeInUp">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3  h1"> <span className="name">SUJIT DHOTRE</span><br/>
                    <ReactTypingEffect
                            text={texts}
                            speed={100}
                            eraseSpeed={50}
                            eraseDelay={2000}
                            typingDelay={500}
                            className="type"
                        />
                        </h1>
                    <p className="lead lead1">Solution-oriented and problem solver with 2 years of experience building and maintaining
                        software and software architecture.  </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type="button" className="btn  px-4 me-md-2 send" onClick={moreClick}>More About Me
                    </button>
                    </div>
                </div>
                </div>
                <Footer/>
            </div>
  
   
    );
}

export default Home;