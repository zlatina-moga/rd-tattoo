import { useTranslation } from "react-i18next";

export default function Home() {
    const { t } = useTranslation();
    return (
        <>
             <section className="hero d-flex flex-column justify-content-center align-items-center" id="home">
                <div className="bg-overlay"></div>
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 col-md-10 mx-auto col-12">
                            <div className="hero-text mt-5 text-center">

                                <h6 data-aos="fade-up" data-aos-delay="300">{t("build_a_lifestyle")}</h6>

                                <h1 className="text-white" data-aos="fade-up" data-aos-delay="500">{t("upgrade_your_body")}</h1>

                                <a href="#feature" className="btn custom-btn mt-3" data-aos="fade-up" data-aos-delay="600">{t("get_started")}</a>

                                <a href="/about" className="btn custom-btn bordered mt-3" data-aos="fade-up" data-aos-delay="700">{t("learn_more")}</a>
                       
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="feature" id="feature">
                <div className="container">
                    <div className="row">

                        <div className="d-flex flex-column justify-content-center ml-lg-auto mr-lg-5 col-lg-5 col-md-6 col-12">
                            <h2 className="mb-3 text-white" data-aos="fade-up">{t("new_tattoo")}</h2>

                            <h6 className="mb-4 text-white" data-aos="fade-up">{t("tattoo_idea")}</h6>

                            <p data-aos="fade-up" data-aos-delay="200">{t("unique_sketch")}</p>

                            <a href="tel:+421904540178" className="btn custom-btn bg-color mt-3" data-aos="fade-up" data-aos-delay="300" data-toggle="modal" data-target="#membershipForm"><i className="fa fa-phone"></i> {t("make_appointment")}</a>
                        </div>

                        <div className="mr-lg-auto mt-3 col-lg-4 col-md-6 col-12">
                            <div className="about-working-hours">
                                <div>

                                    <h2 className="mb-4 text-white" data-aos="fade-up" data-aos-delay="500">{t("working_hours")}</h2>

                                    <strong className="mt-3 d-block" data-aos="fade-up" data-aos-delay="700">{t("weekday")}</strong>

                                    <p data-aos="fade-up" data-aos-delay="800">{t("by_appointment")}</p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}