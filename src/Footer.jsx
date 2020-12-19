
//This is footer page

import React from 'react';

function Footer() {
    return (
        <>
    <div className="container"></div>
    <footer>
      {/* <!-- Footer main --> */}
      <section className="ft-main">
        <div className="ft-main-item">
          <h2 className="ft-title">About</h2>
          <ul>
            <li><a href="#">Services</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">Resources</h2>
          <ul>
            <li><a href="#">Docs</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">eBooks</a></li>
            <li><a href="#">Webinars</a></li>
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">Contact</h2>
          <ul>
            <li><a href="#">Help</a></li>
            <li><a href="#">Sales</a></li>
            <li><a href="#">Advertise</a></li>
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">Stay Updated</h2>
          <p>Join to our Community to get our new Opputurnity!</p>
          <form>
            <input type="email" name="email" placeholder="Enter email address"/>
            <input type="submit" value="Join Us"/>
          </form>
        </div>
      </section>
     
      {/* <!-- Footer social --> */}
      <section className="ft-social">
        <ul className="ft-social-list">
          <li><a href="#"><i className="fab fa-facebook"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          <li><a href="#"><i className="fab fa-github"></i></a></li>
          <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
          <li><a href="#"><i className="fab fa-youtube"></i></a></li>
        </ul>
      </section>
     
      {/* <!-- Footer legal --> */}
      <section className="ft-legal">
        <ul className="ft-legal-list">
          <li><a href="#">Terms &amp; Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li>&copy; 2020 Copyright Nowrap Inc.</li>
        </ul>
      </section>
    </footer>
    </>
  );

}

export default Footer;
