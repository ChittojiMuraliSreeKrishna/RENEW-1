import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Appoinment.css';

const Appoinment = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [config, setConfig] = useState({
        userName: "cskrishna@gmail.com",
        password: "F664B9E115AF78A3A269882E5E9DA0BE420C",
        host: "smtp.elasticemail.com",
        port: 2525,
    })

    const sendEmail = (event) => {
        event.preventDefault();
        const emailInfo = {
            From: 'cmkrishna97@gmail.com',
            To: 'kadalv35@gmail.com',
            Subject: name,
            Body: phone,
            SecureToken: "decff732-3142-4b74-be13-ec940e8dfa52"
        }
        console.log(emailInfo)
        if(window.Email) {
            window.Email.send(emailInfo).then((message) => {
                alert(message)
            })
        }
    }
    return (
        <section className="appoinment-wrapper">
            <Container>
                <Row>
                    <Col sm={12} md={12}>
                        <div className="section-title">
                            <h1 className="mt-5">Request Appointment</h1>
                        </div>
                        <div className="appoinment-form">
                            <form action="#" className="row1" onSubmit={sendEmail}>
                                    <input type="text" placeholder="Name"  value={name} onChange={(e) => setName(e.target.value)} />
                                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <input type="phone" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                {/* <Col md={6} lg={6}>
                                    <input type="text" placeholder="Subject" />
                                </Col> */}
                                <Col md={12} lg={12}>
                                     {/* <textarea name="Message" id="" cols="30" rows="10" placeholder="Message"></textarea> */}
                                </Col>
                                <button type='submit'>send</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Appoinment;