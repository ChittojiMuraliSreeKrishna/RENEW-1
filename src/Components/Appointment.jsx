import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Assets/Styles/Appointment.css';
import emailjs from '@emailjs/browser'

const Appoinment = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");


  const sendEmail = (event) => {
    event.preventDefault();
    const emailInfo = {
      From: 'cmkrishna97@gmail.com',
      To: 'kadalv35@gmail.com',
      Subject: name,
      Body: phone,
    }
    console.log(emailInfo)
    emailjs.send("service_xgg695s", "template_v97mxwj", {
      from_name: name,
      to_name: "kadali",
      message: message + ", My Mobile Number is +91" + phone + " My Email id: " + email,
    }, "MfUwZpiWLQ-d-QCEw");
    props.onClose()
  }

  return (
    <section className="appoinment-wrapper">
      <Container>
        <Row>
          <Col sm={12} md={12}>
            <div className='row'>
              <div className='col-11 col-sm-11'>
                <h1 className="mt-5  ml-5 pt-2">Hi, Need Any Help ?</h1>
              </div>
              <div className='col-1 col-sm-1'>
                <button className='mt-5 btn_cross' onClick={() => props.onClose()}>x</button>
              </div>
            </div>

            <div className="appoinment-form">
              <form action="#" className="row1 form_pad" onSubmit={sendEmail}>
                <input type="text" placeholder="Name" value={name} minLength={4} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email { someone@example.com }" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="phone" placeholder="Phone" value={phone} minLength={10} maxLength={10} onChange={(e) => setPhone(e.target.value)} required />
                <input type="text" placeholder="Message" value={message} minLength={4} onChange={(e) => setMessage(e.target.value)} required />
                <button className='theme-btn btn-fill form-btn mt-5'>send</button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Appoinment;