const Footer = () => {
    return (
        <footer className="footer-wrap">
            <div className="footer footer-top section section-md bg-primary text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-4 mb-4">
                            <a className="footer-brand mr-lg-5 d-flex" href="index.html">
                                <img src="assets/img/logo-white.png" className="mr-3" alt="Footer logo" />
                            </a>
                            <p className="my-4">Interactively unleash interactive best practices before technically sound portals.</p>
                            <div className="btn-wrapper mt-4">
                                <button className="btn btn-icon-only btn-pill btn-twitter mr-2 icon icon-xs icon-shape" type="button" data-toggle="tooltip" data-placement="top" title="" data-original-title="40k Followers">
                                    <span aria-hidden="true" className="fab fa-twitter"></span>
                                </button>
                                <button className="btn btn-icon-only btn-pill btn-facebook mr-2 icon icon-xs icon-shape" type="button" data-toggle="tooltip" data-placement="top" title="" data-original-title="50k Like">
                                    <span aria-hidden="true" className="fab fa-facebook-f"></span>
                                </button>
                                <button className="btn btn-icon-only btn-pill btn-youtube mr-2 icon icon-xs icon-shape" type="button" data-toggle="tooltip" data-placement="top" title="" data-original-title="25k Subscribe">
                                    <span aria-hidden="true" className="fab fa-youtube"></span>
                                </button>
                                <button className="btn btn-icon-only btn-pill btn-dribbble icon icon-xs icon-shape" type="button" data-toggle="tooltip" data-placement="top" title="" data-original-title="2k Project">
                                    <span aria-hidden="true" className="fab fa-dribbble"></span>
                                </button>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                            <h5 className="mb-4">Company</h5>
                            <ul className="links-vertical">
                                <li><a target="_blank" href="#">About Us</a></li>
                                <li><a target="_blank" href="#">Careers</a></li>
                                <li><a target="_blank" href="#">Customers</a></li>
                                <li><a target="_blank" href="#">Community</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                            <h5 className="mb-4">Resources</h5>
                            <ul className="links-vertical">
                                <li><a target="_blank" href="#">Help</a></li>
                                <li><a target="_blank" href="#">Events</a></li>
                                <li><a target="_blank" href="#">Live sessions</a></li>
                                <li><a target="_blank" href="#">Open sources</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-2">
                            <h5 className="mb-4">Support</h5>
                            <ul className="links-vertical">
                                <li><a target="_blank" href="#">Help</a></li>
                                <li><a target="_blank" href="#">Tech Support</a></li>
                                <li><a target="_blank" href="#">Network Status</a></li>
                                <li><a target="_blank" href="#">Contact Support</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer py-3 bg-primary text-white border-top border-variant-default">
                <div className="container">
                    <div className="row">
                        <div className="col p-3">
                            <div className="d-flex text-center justify-content-center align-items-center">
                                <p className="copyright pb-0 mb-0">Copyrights © 2021. All
                                    rights reserved by
                                    <a href="https://themeforest.net/user/themetags" target="_blank">ThemeTags</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;