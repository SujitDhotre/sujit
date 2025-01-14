import React from "react";
import sd_img from "../Images/sd_img.jpg";
import Sidebar from "./Sidebar";



function AboutNew() {
    
    return (
        <div className="container-xl ">
            <Sidebar/>
        <div className="container my-5">
    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis h1">My Self Sujit Dhotre</h1>
        <p className="lead lead2">I have 2 years of experience developing object-oriented and web-based enterprise applications using Java/J2EE, Spring Core, Spring JDBC, and Spring MVC, along with expertise in building interactive web applications using React.js and Redux.</p>
        <h5 className="type h1">Technical Summary</h5>
        <ul className="tech-summary">
            <li><strong>Programming Languages:</strong> Java , JavaScript</li>
            <li><strong>Libraries:</strong> React.js, Redux, Redux-Toolkit, jQuery, AJAX</li>
            <li><strong>Frontend Frameworks:</strong> Bootstrap, Tailwind CSS</li>
            <li><strong>Backend Frameworks:</strong> Spring , Spring MVC, Spring Boot</li>
            <li><strong>J2EE Technologies:</strong> JDBC, JEE , Servlet , JSP </li>
            <li><strong>Server:</strong> Apache Tomcat</li>
            <li><strong>IDE:</strong> Eclipse, VS Code</li>
        </ul>
       
      </div>
      <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden  border-r">
          <img className="rounded-lg-3 img-b" src={sd_img} alt="" width="720"/>
      </div>
    </div>
  </div>
  </div>
    )
}

export default AboutNew