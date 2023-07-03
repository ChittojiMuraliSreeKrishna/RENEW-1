import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Appoinment.css';
import emailjs from '@emailjs/browser'

const Appoinment = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    // const [config, setConfig] = useState({
    //     userName: "cskrishna@gmail.com",
    //     password: "F664B9E115AF78A3A269882E5E9DA0BE420C",
    //     host: "smtp.elasticemail.com",
    //     port: 2525,
    // })

    const sendEmail = (event) => {
        event.preventDefault();
        const emailInfo = {
            From: 'cmkrishna97@gmail.com',
            To: 'kadalv35@gmail.com',
            Subject: name,
            Body: phone,
        }
        console.log(emailInfo)
        // if(window.Email) {
        //     window.Email.send(emailInfo).then((message) => {
        //         alert(message)
        //     })
        // }
        emailjs.send("service_xgg695s","template_v97mxwj",{
            from_name: name,
            to_name: "kadali",
            message: message + ", My Mobile Number is +91" + phone,
            }, "MfUwZpiWLQ-d-QCEw");
    }
    return (
        <section className="appoinment-wrapper">
            <Container>
                <Row>
                    <Col sm={12} md={12}>
                        <div className='row'>
                            <div className='col-11 col-sm-9'>
                            <div className="">
                            <h1 className="mt-5 text-left pt-2">Request Appointment</h1>
                        </div>
                            </div>
                            <div className='col-1 col-sm-3'>
                            <button className='mt-5 btn_cross' onClick={() => props.onClose()}>x</button>
                            </div>
                        </div>
                     
                        <div className="appoinment-form">
                            <form action="#" className="row1 form_pad" onSubmit={sendEmail}>
                                    <input type="text" placeholder="Name"  value={name} onChange={(e) => setName(e.target.value)} />
                                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <input type="phone" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    <input type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                                {/* <Col md={6} lg={6}>
                                    <input type="text" placeholder="Subject" />
                                </Col> */}
                                <Col md={12} lg={12}>
                                     {/* <textarea name="Message" id="" cols="30" rows="10" placeholder="Message"></textarea> */}
                                </Col>
                                <button type='submit' className='theme-btn btn-fill form-btn mt-5'>send</button>
                            </form>
                        </div>
                </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Appoinment;