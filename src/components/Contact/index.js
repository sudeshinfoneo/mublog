import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        message: '',
        name: '',
        email: '',
        subject: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("Field changed:", name, value);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log('Form submitted:', formData); 
        setFormData({
            message: '',
            name: '',
            email: '',
            subject: ''
        });
    };

    return (
        <section className="contact-section">
            <div className="container">
                <div className="d-none d-sm-block mb-5 pb-4"></div>
                <div className="row">
                    <div className="col-12">
                        <h2 className="contact-title">Get in Touch</h2>
                    </div>
                    <div className="col-lg-8">
                        <form className="form-contact contact_form" onSubmit={handleSubmit} id="contactForm" noValidate>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <textarea
                                            className="form-control w-100"
                                            name="message"
                                            id="message"
                                            cols="30"
                                            rows="9"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder='Enter Message' />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            name="name"
                                            id="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder='Enter your name' />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder='Enter email address' />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            name="subject"
                                            id="subject"
                                            type="text"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder='Enter Subject' />
                                    </div>
                                </div>
                            </div>
                            <div className="load_btn">
                                <button type="submit" className="btn_1">Send Message</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4">
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-home"></i></span>
                            <div className="media-body">
                                <h3>Buttonwood, California.</h3>
                                <p>Rosemead, CA 91770</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                            <div className="media-body">
                                <h3>00 (440) 9865 562</h3>
                                <p>Mon to Fri 9am to 6pm</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-email"></i></span>
                            <div className="media-body">
                                <h3>[email&#160;protected]</h3>
                                <p>Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
