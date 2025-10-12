import React from 'react';

function Certificates() {
  return (
    <section id="certificates" className="container py-5">
      <h2 className="text-center mb-4">Certificates</h2>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card p-3 text-center shadow">
            <h5>RED HAT</h5>
            <p><a href="https://www.credly.com/badges/bd8ac562-6a1c-4a7e-ada3-242576b17856" target="_blank">Red Hat Application Development I: Programming in Java EE</a></p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-3 text-center shadow">
            <h5>Coursera</h5>
            <p><a href="https://www.coursera.org/account/accomplishments/verify/HU9CV5DV2RT9" target="_blank">Foundations of Cybersecurity</a></p>
            <p><a href="https://www.coursera.org/account/accomplishments/verify/11RCVYIHESLW" target="_blank">Full-stack Development with Django: Managing Migrations</a></p>
            <p><a href="https://coursera.org/verify/QLDLHGDEY568" target="_blank">Personal Productivity, Time Management and Prioritization</a></p>
            <p><a href="https://coursera.org/verify/specialization/R5VFSF5IA8QQ" target="_blank">Blockchain</a></p>
            <p><a href="https://www.coursera.org/account/accomplishments/specialization/4VF48X79W8QC" target="_blank">Software Engineering</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
