const AboutHeaderSection = () => {
    return (
        <section className="">
            <div className="section-lg bg-gradient-primary text-white section-header">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-7">
                            <div className="page-header-content text-center">
                                <h1>About Us</h1>
                                <nav aria-label="breadcrumb" className="d-flex justify-content-center">
                                    <ol className="breadcrumb breadcrumb-transparent breadcrumb-text-light">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">About Us</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutHeaderSection;