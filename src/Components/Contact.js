import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Sidebar from './Sidebar';
import '../App.css';
import Footer from './Footer';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Get form fields
    const email = form.current.elements["email"].value;
    const name = form.current.elements["from_name"].value;
    const message = form.current.elements["message"].value;

    // Validate form fields
    if (!email || !name || !message) {
      alert('Please Insert All Data....!');
      return;
    }

    emailjs
      .sendForm('service_y6yilhm', 'template_mpu16m9', form.current, {
        publicKey: 'j-DpKOVRHFlnWiXcl',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send email, please try again.');
          form.current.reset();
        },
      );
  };

  return (
    <div className="container-xl " id="icon-grid">
      <Sidebar/>
      <h1 className="pb-2 border-bottom h1" id='contact'>Contact Me</h1>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
              <input type="email" className="form-control input" id="email" aria-describedby="emailHelp" name="email" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
              <input type="text" className="form-control input" id="name" name="from_name" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
              <textarea className="form-control input" id="msg" name="message"></textarea>
            </div>
            <div className="d-grid">
              <button type="submit" value="Send" className="btn send">Send</button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;