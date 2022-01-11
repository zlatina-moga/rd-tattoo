export default function Home() {
    return (
        <>
             <section className="hero d-flex flex-column justify-content-center align-items-center" id="home">
                <div className="bg-overlay"></div>
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 col-md-10 mx-auto col-12">
                            <div className="hero-text mt-5 text-center">

                                <h6 data-aos="fade-up" data-aos-delay="300">new way to build a healthy lifestyle!</h6>

                                <h1 className="text-white" data-aos="fade-up" data-aos-delay="500">Upgrade your body at Gymso Fitness</h1>

                                <a href="#feature" className="btn custom-btn mt-3" data-aos="fade-up" data-aos-delay="600">Get started</a>

                                <a href="#about" className="btn custom-btn bordered mt-3" data-aos="fade-up" data-aos-delay="700">learn more</a>
                       
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="feature" id="feature">
                <div className="container">
                    <div className="row">

                        <div className="d-flex flex-column justify-content-center ml-lg-auto mr-lg-5 col-lg-5 col-md-6 col-12">
                            <h2 className="mb-3 text-white" data-aos="fade-up">New to the gymso?</h2>

                            <h6 className="mb-4 text-white" data-aos="fade-up">Your membership is up to 2 months FREE ($62.50 per month)</h6>

                            <p data-aos="fade-up" data-aos-delay="200">Gymso is free HTML template by <a rel="nofollow" href="https://www.tooplate.com" target="_parent">Tooplate</a> for your commercial website. Bootstrap v4.2.1 Layout. Feel free to use it.</p>

                            <a href="#" className="btn custom-btn bg-color mt-3" data-aos="fade-up" data-aos-delay="300" data-toggle="modal" data-target="#membershipForm">Become a member today</a>
                        </div>

                        <div className="mr-lg-auto mt-3 col-lg-4 col-md-6 col-12">
                            <div className="about-working-hours">
                                <div>

                                    <h2 className="mb-4 text-white" data-aos="fade-up" data-aos-delay="500">Working hours</h2>

                                    <strong className="d-block" data-aos="fade-up" data-aos-delay="600">Sunday : Closed</strong>

                                    <strong className="mt-3 d-block" data-aos="fade-up" data-aos-delay="700">Monday - Friday</strong>

                                    <p data-aos="fade-up" data-aos-delay="800">7:00 AM - 10:00 PM</p>

                                    <strong className="mt-3 d-block" data-aos="fade-up" data-aos-delay="700">Saturday</strong>

                                    <p data-aos="fade-up" data-aos-delay="800">6:00 AM - 4:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}