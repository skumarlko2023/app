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
                                    <a href="#">
                                        <img src="assets/img/logo-color.png" alt="menuimage" />
                                    </a>
                                </div>
                                <div className="col-6 collapse-close">
                                    <i className="fas fa-times" data-toggle="collapse" role="button"
                                        data-target="#navbar-default-primary" aria-controls="navbar-default-primary"
                                        aria-expanded="false" aria-label="Toggle navigation"></i>
                                </div>
                            </div>
                        </div>
                        <ul className="navbar-nav navbar-nav-hover ml-auto">
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                                    <span className="nav-link-inner-text">Home</span>
                                    <i className="fas fa-angle-down nav-link-arrow ml-1"></i>
                                </a>
                                <ul className="sub-menu dropdown-menu">
                                    <li><a className="dropdown-item" href="index.html">Home Page 01</a></li>
                                    <li><a className="dropdown-item" href="index-2.html">Home Page 02</a></li>
                                    <li><a className="dropdown-item" href="index-3.html">Home Page 03</a></li>
                                    <li><a className="dropdown-item" href="index-4.html">Home Page 04</a></li>
                                    <li><a className="dropdown-item" href="index-5.html">Home Page 05</a></li>
                                    <li><a className="dropdown-item" href="index-6.html">Home Page 06</a></li>
                                    <li><a className="dropdown-item" href="index-7.html">Home Page 07</a></li>
                                    <li><a className="dropdown-item" href="index-8.html">Home Page 08 <span className="badge badge-danger ml-2">New</span></a></li>
                                    <li><a className="dropdown-item" href="index-9.html">Home Page 09 <span className="badge badge-danger ml-2">New</span></a></li>
                                    <li><a className="dropdown-item" href="index-10.html">Home Page 10 <span className="badge badge-danger ml-2">New</span></a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="about-us.html">About Us</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link" data-toggle="dropdown" role="button">
                                    <span className="nav-link-inner-text">Pages </span>
                                    <i className="fas fa-angle-down nav-link-arrow ml-1"></i>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-submenu">
                                        <a href="#" className="dropdown-toggle dropdown-item d-flex justify-content-between align-items-center" aria-haspopup="true" aria-expanded="false">Login & Signup <i className="fas fa-angle-right nav-link-arrow"></i></a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="basic-login.html">Login Page 1</a></li>
                                            <li><a className="dropdown-item" href="login.html">Login Page 2</a></li>
                                            <li><a className="dropdown-item" href="basic-sign-up.html">Signup Page 1</a></li>
                                            <li><a className="dropdown-item" href="sign-up.html">Signup Page 2</a></li>
                                            <li><a className="dropdown-item" href="password-reset.html">Reset Password</a></li>
                                            <li><a className="dropdown-item" href="change-password.html">Change Password</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a href="#" className="dropdown-toggle dropdown-item d-flex justify-content-between align-items-center" aria-haspopup="true" aria-expanded="false">Utilities <i className="fas fa-angle-right nav-link-arrow"></i></a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="download.html">Download Page</a></li>
                                            <li><a className="dropdown-item" href="review.html">Review Page</a></li>
                                            <li><a className="dropdown-item" href="faq.html">FAQ Page</a></li>
                                            <li><a className="dropdown-item" href="404.html">404 Page</a></li>
                                            <li><a className="dropdown-item" href="coming-soon.html">Coming Soon</a></li>
                                            <li><a className="dropdown-item" href="thank-you.html">Thank You Page</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a href="#" className="dropdown-toggle dropdown-item d-flex justify-content-between align-items-center" aria-haspopup="true" aria-expanded="false">Team <i className="fas fa-angle-right nav-link-arrow"></i></a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="team.html">Our Team Members</a></li>
                                            <li><a className="dropdown-item" href="team-single.html">Team Member Profile</a></li>
                                        </ul>
                                    </li>
                                    <li><a className="dropdown-item" href="project-details.html">Project Details </a></li>
                                    <li><a className="dropdown-item" href="services-details.html">Services Details</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="services.html">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="project.html">Project</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                                    <span className="nav-link-inner-text">Blog</span>
                                    <i className="fas fa-angle-down nav-link-arrow ml-1"></i>
                                </a>
                                <ul className="sub-menu dropdown-menu">
                                    <li><a className="dropdown-item" href="blog-default.html">Blog Grid</a></li>
                                    <li><a className="dropdown-item" href="blog-no-sidebar.html">Blog No Sidebar</a></li>
                                    <li><a className="dropdown-item" href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                    <li><a className="dropdown-item" href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                    <li><a className="dropdown-item" href="blog-single-left-sidebar.html">Details Left Sidebar</a></li>
                                    <li><a className="dropdown-item" href="blog-single-right-sidebar.html">Details Right Sidebar</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="contact-us.html">Contact Us</a></li>
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