const ContactUsForm = () => {
    return (
        <section className="section section-lg">
            <div className="container contact">
                <div className="col-12 pb-3 message-box d-none">
                    <div className="alert alert-danger"></div>
                </div>
                <div className="row justify-content-around">
                    <div className="col-md-6">
                        <div className="contact-us-form bg-soft rounded p-5">
                            <h4>Ready to get started?</h4>
                            <form action="#" method="POST" id="contactForm" className="contact-us-form mt-4">
                                <div className="form-row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="name" placeholder="Enter name" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="email" className="form-control" name="email" placeholder="Enter email" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <textarea name="message" id="message" className="form-control" rows="7" cols="25" placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 mt-3">
                                        <button type="submit" className="btn btn-secondary" id="btnContactUs">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="contact-us-content">
                            <h2>Looking for a excellent Business idea?</h2>
                            <p className="lead">Seamlessly deliver pandemic e-services and next-generation initiatives.</p>

                            <a href="#" className="btn btn-outline-secondary align-items-center">Get Directions <span className="ti-arrow-right pl-2"></span></a>

                            <hr className="my-5" />

                                <h5>Our Headquarters</h5>
                                <address>
                                    100 Yellow House, Mn <br />
                                        Factory, United State, 13420
                                </address>
                                <br />
                                    <span>Phone: +1234567890123</span> <br />
                                        <span>Email: <a href="mailto:email@yourdomain.com" className="link-color">email@yourdomain.com</a></span>

                                    </div>
                                </div>
                        </div>
                    </div>
                </section>
                )
}
                export default ContactUsForm;