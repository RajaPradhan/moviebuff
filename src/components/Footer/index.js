import React from 'react';

const Footer = () => (
  // <div
  //   className="row"
  //   style={{
  //     backgroundColor: "#232f3e",
  //     color: "#fff",
  //     marginBottom: "0",
  //     padding: "15px 0",
  //     textAlign: "center"
  //   }}
  // >
  //   &copy; All rights reserved. Raja Pradhan.
  // </div>
  <footer className="page-footer" style={{ backgroundColor: '#232f3e' }}>
    <div className="container">
      <div className="row">
        <div className="col s12 offset-m2 m3">
          <h5 className="white-text">Useful Links</h5>
          <ul>
            <li>Currently running</li>
            <li>Popular movies</li>
            <li>Latest Movies</li>
            <li>Classic movies</li>
          </ul>
        </div>

        <div className="col s12 offset-m2 m3">
          <h5 className="white-text">Stay in touch!</h5>
          <ul>
            <li>Github</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright" style={{ backgroundColor: '#131a22' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        © 2017-2018 All rights reserved. Raja Pradhan.
      </div>
    </div>
  </footer>
);

export default Footer;
