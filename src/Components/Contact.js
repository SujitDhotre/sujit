import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Sidebar from './Sidebar';
import '../App.css';
import Footer from './Footer';

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    // Get form fields
    const email = form.current.elements["email"].value.trim();
    const name = form.current.elements["from_name"].value.trim();
    const message = form.current.elements["message"].value.trim();

    // Validate form fields
    if (!email || !name || !message) {
      alert('Please fill out all fields.');
      return;
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setLoading(true); // Start loading state

    try {
      await emailjs.sendForm(
        'service_y6yilhm', 
        'template_mpu16m9', 
        form.current, 
        'j-DpKOVRHFlnWiXcl'
      );
      alert('Email sent successfully!');
      form.current.reset();
    } catch (error) {
      console.error('Email send failed:', error);
      alert('Failed to send email, please try again later.');
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <div className="container-xl" id="icon-grid">
      <Sidebar />
      <h1 className="pb-2 border-bottom h1" id="contact">Contact Me</h1>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control input"
                id="email"
                name="email"
              />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control input"
                id="name"
                name="from_name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control input"
                id="message"
                name="message"
              ></textarea>
            </div>
            <div className="d-grid">
              <button
                type="submit"
                className="btn send"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
