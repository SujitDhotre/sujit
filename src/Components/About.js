import React from "react";
import {useNavigate} from 'react-router-dom'
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import sd_img from "../Images/sd_img.jpg";

function About() {
    const navigate=useNavigate()
    function contactClick() {
           navigate('/contact');
       }
    return(
        <div className="container-xl ">
            <Sidebar/>
            <div className="px-4 py-5 my-5 text-center">
                <img className="d-block mx-auto mb-2 img" src={sd_img} alt="" width="72" height="57"/>
                <h1 className="display-5 fw-bold h1"> My Self Sujit Dhotre </h1>
                <div className="col-lg-xxl mx-auto">
                <p className="lead mb-4 lead1">I am a dedicated software developer with 2 years of experience in designing and implementing web applications. I hold a Bachelor of Computer Science (BCS) from SPPU Pune University, providing me with a solid foundation in software development principles.</p>
                <p className="lead mb-4 lead1 " >My expertise lies in:<br/>
                <br/><b className="bold text-left">Back-End Development: </b> Proficient in Java and Spring frameworks, with a focus on building robust services using Spring MVC.
                <br/><b className="bold text-left">Front-End Development:</b> Skilled in React.js, HTML, and CSS, enabling the creation of dynamic and responsive user interfaces.
                <br/><b className="bold text-left">Database Management: </b>Experienced in MySQL for efficient data storage and retrieval.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" onClick={contactClick} className="btn send btn-lg px-4 gap-3" fdprocessedid="q2w6gh">Contact Me</button>
                </div>
                </div>
            </div>
            <Footer/>
        </div>

    )

}

export default About;