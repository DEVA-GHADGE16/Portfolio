import React from 'react';

function Contact() {
  return (
    <section id="contact" className="container py-10">
      <h2 className="text-center mb-4">Contact Me</h2>
      <form className="row g-3" action="https://formspree.io/f/xkgvanlv" method="POST">
        <div className="col-md-6">
          <input type="text" className="form-control" name="name" placeholder="Your Name" required />
        </div>
        <div className="col-md-6">
          <input type="email" className="form-control" name="email" placeholder="Your Email" required />
        </div>
        <div className="col-12">
          <textarea className="form-control" name="message" rows="4" placeholder="Message" required></textarea>
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary">Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
