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
function Skills() {
    return(
<div className="container-xl " id="icon-grid">
  <Sidebar/>
    <h1 className="pb-2 border-bottom h1" id='skill'>Skill's</h1>

    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
      <div className="col d-flex align-items-start">
        {/* <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg> */}
        <img src={java} className=" text-body-secondary flex-shrink-0 me-3" width="50" height="50" />
        <div >
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Java</h3>
          <p>Strong grasp of object-oriented programming principles and a passion for developing efficient, scalable applications.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <img src={js} className=" text-body-secondary flex-shrink-0 me-3" width="50" height="50" />
      <div>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">JavaScript</h3>
          <p>Strong foundation in building interactive and dynamic web applications. Proficient in both ES6+ syntax and core concepts.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <img src={mysql} className=" text-body-secondary flex-shrink-0 me-3" width="50" height="50" />
      <div>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">MySql</h3>
          <p>Deep understanding of RDBMS design, management, and optimization. Proficient in writing complex SQL queries.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <img src={code} className=" text-body-secondary flex-shrink-0 me-3" width="50" height="50" />
      <div>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">HTML & CSS</h3>
          <p>Strong foundation in HTML and CSS, dedicated to creating visually appealing and responsive web pages.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <img src={react} className=" text-body-secondary flex-shrink-0 me-3" width="50" height="50" />
      <div>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">React.js</h3>
          <p>Skilled in creating seamless and interactive web applications. With a solid understanding of component-based architecture.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <img src={node} className=" text-body-secondary flex-shrink-0 me-3" width="50" height="50" />
      <div>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Node.js</h3>
          <p>Strong background in creating efficient and scalable server-side applications. Proficient in leveraging JavaScript on the backend.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <img src={Spring} className=" text-body-secondary flex-shrink-0 me-3" width="50" height="50" />
      <div>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Spring</h3>
          <p>Solid foundation in building robust and scalable enterprise applications. Proficient in the Spring framework.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <img src={Spring} className=" text-body-secondary flex-shrink-0 me-3" width="50" height="50" />
      <div>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Spring MVC</h3>
          <p>Experience in building dynamic, enterprise-level web applications. Utilizing the Model-View-Controller (MVC) architecture, I excel at creating maintainable and scalable applications</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <img src={Jquery} className=" text-body-secondary flex-shrink-0 me-3" width="50" height="50" />
      <div>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Jquery</h3>
          <p>Simplifying HTML document traversing, event handling, and animation, allowing for seamless user interactions and enhanced web experiences.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <img src={json} className=" text-body-secondary flex-shrink-0 me-3" width="50" height="50" />
      <div>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Json</h3>
          <p>Proficiency in JSON for data interchange in web app's.Structuring & managing data, enabling seamless communication between client-side & server-side apps.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <img src={Bootstrap} className=" text-body-secondary flex-shrink-0 me-3" width="50" height="50" />
      <div>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Bootstrap</h3>
          <p>Skilled in Bootstrap to create responsive, mobile-first web applications. With a strong understanding of Bootstrap’s grid system and component library.</p>
        </div>
      </div>
    </div>
    <Footer/>
  </div>


    );
}

export default Skills;