import React from 'react';
import code from '../Images/code.png';
import java from '../Images/java.png';
import js from '../Images/js.png';
import mysql from '../Images/mysql.png';
import react from '../Images/react.png';
import Jquery from '../Images/Jquery.png';
import json from '../Images/json.gif';
import Bootstrap from '../Images/bootstrap.png';
import Spring from '../Images/spring.png';
import node from '../Images/node.png';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Skill from './Skill';
import tailwind_logo from '../Images/tailwind-css.svg'

function Skills() {
    return(
<div className="container-xl " id="icon-grid">
  <Sidebar/>
    <h1 className="pb-2 border-bottom h1" id='skill'>Skill's</h1>

    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4 py-4">
      

      {/* using componet for better understanding and manageing  */}
      <Skill
      logo={java}
      title="Java"
      description="Strong grasp of object-oriented programming principles and a passion for developing efficient, scalable applications."
      />
      {/* Spring  */}
      <Skill 
      logo={Spring}
      title="Spring"
      description="Solid foundation in building robust and scalable enterprise applications. Proficient in the Spring framework."
      />
      {/* Spring MVC  */}
      <Skill
      logo={Spring}
      title="Spring MVC"
      description="Experience in building dynamic, enterprise-level web applications. Utilizing the Model-View-
      Controller (MVC) architecture, I excel at creating maintainable and scalable applications"
      />
      {/* javascript */}
      <Skill
      logo={js}
      title="JavaScript"
      description="Proficient in JavaScript for client-side scripting, enabling dynamic and interactive web experiences."
      />
      <Skill
      logo={react}
      title="React.js"
      description="Experience in building reusable UI components and managing complex state changes with React."
      />
      <Skill
      logo={node}
      title="Node.js"
      description="Proficient in Node.js for server-side development, enabling efficient and scalable backend applications."
      />
      {/* Jquery */}
      <Skill
      logo={Jquery}
      title="Jquery"
      description="Proficient in Jquery for DOM manipulation, event handling, and AJAX requests."
      />
      {/* json */}
      <Skill
      logo={json}
      title="JSON"
      description="Strong understanding of JSON data format and its applications in web development."
      />
      <Skill
      logo={mysql}
      title="MySQL"
      description="Experience in database design, schema development, and query optimization using MySQL."
      />
      {/* Html and css */}
      <Skill
      logo={code}
      title="HTML/CSS"
      description="Proficient in HTML and CSS for structuring and styling web pages, ensuring a visually
      appealing and user-friendly experience."
      />
      {/* bootstrap  */}
      <Skill
      logo={Bootstrap}
      title="Bootstrap"
      description="Experience in using Bootstrap for responsive web design, enabling cross-browser compatibility and accessibility."
      />
      <Skill
      logo={tailwind_logo }
      title="Tailwind CSS"
      description="Utilizing Tailwind CSS for rapid development of responsive and accessible UI components, streamlining"
      />
    </div>
    <Footer/>
  </div>


    );
}

export default Skills;