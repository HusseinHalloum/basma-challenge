import React from 'react';
import ButtonFilled from '../UI/ButtonFilled';

import './Contact.css';;


const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="main-container">
                <div className="inner-container">
                    <div className="info-container">
                        <div className="single-info-container">
                            <h5>Address</h5>
                            <p>121 King Street, Melbourne Victoria 3000 Australia</p>
                        </div>
                        <div className="single-info-container">
                            <h5>Phone</h5>
                            <p>+61 3 8376 6284</p>
                        </div>
                        <div className="single-info-container">
                            <h5>Email</h5>
                            <p>support@example.com</p>
                        </div>
                    </div>
                    <div className="form-container">
                        <form action="#" id="contact-form" className="contact-form">
                            <input type="text" id="name" name="name" className="form-input name" placeholder="Name" />
                            <input type="text" id="email" name="email" className="form-input email" placeholder="Email Address" />
                            <input type="text" id="subject" name="subject" className="form-input subject" placeholder="Subject" />
                            <textarea rows="6" id="message" name="message" placeholder="Message" className="form-input message"  />
                            <div className="button-container">
                                <ButtonFilled value='Send Message' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;

