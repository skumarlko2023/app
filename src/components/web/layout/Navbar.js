import { Link } from "react-router-dom";
import Preloader from "./Preloader";
const Navbar = () => {
    return (
        <>
            <Preloader />
            <header className="header position-relative z-9">
                <nav className="navbar navbar-expand-lg navbar-transparent navbar-dark navbar-theme-primary fixed-top headroom">
                    <div className="container position-relative">
                        <a className="navbar-brand mr-lg-3" href="index.html">
                            <img className="navbar-brand-dark" src="assets/img/logo-white.png" alt="menuimage" />
                            <img className="navbar-brand-light" src="assets/img/logo-color.png" alt="menuimage" />
                        </a>
                        <div className="navbar-collapse collapse" id="navbar-default-primary">
                            <div className="navbar-collapse-header">
                                <div className="row">
                                    <div className="col-6 collapse-brand">
                                        <Link to="/home">
                                            <img src="assets/img/logo-color.png" alt="menuimage" />
                                        </Link>
                                    </div>
                                    <div className="col-6 collapse-close">
                                        <i className="fas fa-times" data-toggle="collapse" role="button"
                                            data-target="#navbar-default-primary" aria-controls="navbar-default-primary"
                                            aria-expanded="false" aria-label="Toggle navigation"></i>
                                    </div>
                                </div>
                            </div>
                            <ul className="navbar-nav navbar-nav-hover ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about-us">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/services">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact-us">Contact Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/blog">Blog</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex align-items-center">
                            <button className="navbar-toggler ml-2" type="button" data-toggle="collapse" data-target="#navbar-default-primary" aria-controls="navbar-default-primary" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Navbar;