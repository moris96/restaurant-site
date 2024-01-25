import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';

const Footer = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container className="flex-grow-1">
        {/* Your main content goes here */}
      </Container>
      <footer className="text-white text-center text-lg-start" style={{ backgroundColor: '#23242a', flexShrink: 0 }}>
        <Container className="p-4">
          <Row className="justify-content-between">
            <Col lg={4} md={12} className="mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">About Us</h5>
              <p>
                Welcome to Hobbiton Bistro, a charming restaurant located in the heart of the Shire, run by a delightful community of Hobbits.
              </p>
              <p>
                Our menu features hearty pies, tender roasts, and locally sourced delights and produce, all crafted with love and a touch of Hobbit magic. Inspired by our homely homes often referred as "Hobbit holes", we aim to provide as much comfort from home as possible for both Hobbits and everybody else. Step into our world and enjoy a delicious meal while experiencing the magic, warmth, and homely comfort of the Shire.
              </p>
              <div className="mt-4">
                <h5>Follow us on our socials!</h5>
                <Button variant="warning" className="btn-floating btn-lg"><i className="fab fa-facebook-f" /></Button>
                <Button variant="warning" className="btn-floating btn-lg"><i className="fab fa-tiktok" /></Button>
                <Button variant="warning" className="btn-floating btn-lg"><i className="fab fa-snapchat-ghost" /></Button>
                <Button variant="warning" className="btn-floating btn-lg"><i className="fab fa-twitter" /></Button>
                <Button variant="warning" className="btn-floating btn-lg"><i className="fab fa-instagram" /></Button>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4 mb-md-0">
              <ul className="fa-ul" style={{ marginLeft: '1.65em' }}>
                <li className="mb-3">
                  <span className="fa-li"><i className="fas fa-home" /></span><span className="ms-2">505 Buckland Road, Hobbitton, The Shire, Middle Earth</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li"><i className="fas fa-envelope" /></span><span className="ms-2">info@hobbitonbistro.com</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li"><i className="fas fa-phone" /></span><span className="ms-2">+ 01 420 420 69</span>
                </li>
              </ul>
            </Col>
            <Col lg={4} md={6} className="mb-4 mb-md-0">
            <h4 className="text-uppercase mb-4 text-center">Open everyday 7am - 11pm</h4>
              <h5 className="text-uppercase mb-4 text-center">Hours</h5>
              <table className="table text-center text-white">
                <tbody className="font-weight-normal">
                  <tr>
                    <td>Breakfast:</td>
                    <td>7am - 9am</td>
                  </tr>
                  <tr>
                    <td>Second Breakfast:</td>
                    <td>9am - 11am</td>
                  </tr>
                  <tr>
                    <td>Elevenses:</td>
                    <td>11am - 1pm</td>
                  </tr>
                  <tr>
                    <td>Lunch:</td>
                    <td>1m - 3pm</td>
                  </tr>
                  <tr>
                    <td>Afternoon Tea:</td>
                    <td>3pm - 6pm</td>
                  </tr>
                  <tr>
                    <td>Dinner:</td>
                    <td>6pm - 9pm</td>
                  </tr>
                  <tr>
                    <td>Supper:</td>
                    <td>9pm - 11pm</td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
        </Container>
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2024 Copyright: <br/>
          <a className="text-white" href="#">hobbitonbistro.com</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
