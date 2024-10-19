import {React} from 'react';
import Sidebar from './Sidebar';
import '../App.css';
import one from '../Images/TODO/1.png';
import two from '../Images/TODO/2.png';
import three from '../Images/TODO/3.png';
import hr1 from '../Images/HR/1.png';
import hr2 from '../Images/HR/2.png';
import hr3 from '../Images/HR/3.png';
import text1 from '../Images/Textutility/1.png';
import text2 from '../Images/Textutility/2.png';
import text3 from '../Images/Textutility/3.png';
import tr1 from '../Images/Trading/1.png';
import tr2 from '../Images/Trading/2.png';
import tr3 from '../Images/Trading/3.png';
import dm1 from '../Images/DMS/1.png';
import dm2 from '../Images/DMS/2.png';
import dm3 from '../Images/DMS/3.png';
import c1 from '../Images/CBF/1.png';
import c2 from '../Images/CBF/2.png';
import c3 from '../Images/CBF/3.png';
import Footer from './Footer';

function Projects() {
    return (
        <div className="container-xl ">
            <Sidebar/>
            <h1 className="pb-2 border-bottom h1" id='project'>Project's</h1>
           
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {/* project one HR help desk */}
                    <div className="col animate__animated animate__fadeInUp">
                        <div className="card shadow-sm">
                            <div id="carouselExampleControls1" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={hr1} className="d-block w-100" alt="First Slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={hr2} className="d-block w-100" alt="Second Slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={hr3} className="d-block w-100" alt="Third Slide" />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="card-body pro_card">
                                <p className="card-text">This project is build for the HR to manage their daily tasks and work related complexity. It is very helpful for them. They do their work easy and very efficiently. We use following technology to build this project.</p>
                            </div>
                        </div>
                    </div>
                    {/* project two TODO list */}
                    <div className="col animate__animated animate__fadeInUp">
                        <div className="card shadow-sm">
                            <div id="carouselExampleControls2" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={one} className="d-block w-100" alt="First Slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={two} className="d-block w-100" alt="Second Slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={three} className="d-block w-100" alt="Third Slide" />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="card-body pro_card">
                                <p className="card-text">The To-Do App is designed to help users manage their daily tasks efficiently. Users can create, update, delete, and track tasks, ensuring they stay organized and productive. The application built using java provide a robust, scalable, and secure solution.</p>
                            </div>
                        </div>
                    </div>
                    {/* project three Textutility app */}
                    <div className="col animate__animated animate__fadeInUp">
                        <div className="card shadow-sm">
                            <div id="carouselExampleControls3" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={text1} className="d-block w-100" alt="First Slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={text2} className="d-block w-100" alt="Second Slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={text3} className="d-block w-100" alt="Third Slide" />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="card-body pro_card">
                                <p className="card-text">The Text Utility App is specifically designed for individuals who regularly engage in content writing and other text-related tasks. This application offers a suite of tools to enhance productivity, streamline writing processes, and improve the quality of content. Built using React.js, the app ensures a fast, responsive, and user-friendly experience.</p>
                            </div>
                        </div>
                    </div>
                    {/* project four trading management */}
                    <div className="col animate__animated animate__fadeInUp">
                        <div className="card shadow-sm">
                            <div id="carouselExampleControls4" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={tr1} className="d-block w-100" alt="First Slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={tr2} className="d-block w-100" alt="Second Slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={tr3} className="d-block w-100" alt="Third Slide" />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="card-body pro_card">
                                <p className="card-text">The Trading Management System is a comprehensive solution designed for businesspeople in the chicken and egg industry. It addresses the complexities of managing numerous daily transactions and streamlines various aspects of poultry trading. Utilizing MVC architecture, Java, JSP, and modern front-end technologies, this system offers a user-friendly and efficient platform for managing poultry trading operations.</p>
                            </div>
                        </div>
                    </div>
                    {/* Project five Dairy management */}
                    <div className="col animate__animated animate__fadeInUp">
                        <div className="card shadow-sm">
                            <div id="carouselExampleControls5" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={dm1} className="d-block w-100" alt="First Slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={dm2} className="d-block w-100" alt="Second Slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={dm3} className="d-block w-100" alt="Third Slide" />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls5" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls5" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="card-body pro_card">
                                <p className="card-text">The Dairy Management System is a comprehensive application designed to streamline and manage the operations of dairy businesses. Built using MVC architecture, Java, JSP, and modern front-end technologies, this system facilitates efficient handling of various aspects of dairy management, including inventory, transactions, accounting, and more. The system is tailored to address the unique challenges faced by dairy business owners, ensuring smooth and effective operations.</p>
                            </div>
                        </div>
                    </div>
                    {/* project six contract broiler farmening */}
                    <div className="col animate__animated animate__fadeInUp">
                        <div className="card shadow-sm">
                            <div id="carouselExampleControls6" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={c1} className="d-block w-100" alt="First Slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={c2} className="d-block w-100" alt="Second Slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={c3} className="d-block w-100" alt="Third Slide" />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls6" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls6" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="card-body pro_card">
                                <p className="card-text">The Contract Broiler Farming System is a specialized application designed to manage and streamline the operations of broiler farming businesses. Leveraging MVC architecture, Java, JSP, and modern front-end technologies, this system provides a comprehensive platform for handling various aspects of broiler farming, including inventory, transactions, accounting, and more. The system is tailored to meet the unique needs of broiler farmers, ensuring efficient and effective management of their operations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Projects;
