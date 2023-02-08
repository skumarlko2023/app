const ContactInformation = () => {
    return (
        <section className="section section-lg pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4 mb-md-4 mb-lg-0">
                        <div className="rounded-custom text-center shadow-sm">
                            <div className="card-body py-5">
                                <div className="icon icon-md text-secondary">
                                    <i className="ti-mobile"></i>
                                </div>
                                <div>
                                    <h5 className="h6">Call Us</h5>
                                    <p className="text-muted mb-0">+123 456-78900</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4 mb-md-4 mb-lg-0">
                        <div className="rounded-custom text-center shadow-sm">
                            <div className="card-body py-5">
                                <div className="icon icon-md text-secondary">
                                    <i className="ti-location-pin"></i>
                                </div>
                                <div>
                                    <h5 className="h6">Visit Us</h5>
                                    <p className="text-muted mb-0">New York, CA N310</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4 mb-md-4 mb-lg-0">
                        <div className="rounded-custom text-center shadow-sm">
                            <div className="card-body py-5">
                                <div className="icon icon-md text-secondary">
                                    <i className="ti-email"></i>
                                </div>
                                <div>
                                    <h5 className="h6">Mail Us</h5>
                                    <p className="text-muted mb-0">help@yourdomain.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4 mb-md-4 mb-lg-0">
                        <div className="rounded-custom text-center shadow-sm">
                            <div className="card-body py-5">
                                <div className="icon icon-md text-secondary">
                                    <i className="ti-headphone-alt"></i>
                                </div>
                                <div>
                                    <h5 className="h6">Live Chat</h5>
                                    <p className="text-muted mb-0">Chat with Us 24/7</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContactInformation;