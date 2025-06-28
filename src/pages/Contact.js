import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef= useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_xwtx43c',
      'template_dnau9l7',
      formRef.current,
      'j0GWMeMtoWB0v5rBo'
    )
    .then(() => {
      alert('Message sent successfully!');
      form.current.reset();
    })
    .catch((error) => {
      alert('Failed to send message. Try again.');
      console.error(error);
    });
  };

  return (
    <div className="contact">
  <h2>Contact Us</h2>
  <form ref={formRef} onSubmit={sendEmail}>
    <div className="form-group">
      <input type="text" name="name" required placeholder=" " />
      <label>Name</label>
    </div>
    <div className="form-group">
      <input type="email" name="email" required placeholder=" " />
      <label>Email</label>
    </div>
    <div className="form-group">
      <textarea name="message" rows="5" required placeholder=" "></textarea>
      <label>Message</label>
    </div>
    <button type="submit">Send Message</button>
  </form>
</div>

  );
};

export default Contact;
