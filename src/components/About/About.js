import { useTranslation } from "react-i18next";

export default function About(){
    const { t } = useTranslation();
    return (
        <section className="about section" id="about">
        <div className="container">
             <div className="row">

                     <div className="mt-lg-5 mb-lg-0 mb-4 col-lg-5 col-md-10 mx-auto col-12">
                         <h2 className="mb-4" data-aos="fade-up" data-aos-delay="300">{t("welcome_to_RD_tattoo")}</h2>

                         <p data-aos="fade-up" data-aos-delay="400">{t("our_goal")}</p>

                         <p data-aos="fade-up" data-aos-delay="500">{t("if_you_have_questions")}<a rel="nofollow" href="tel:+421904540178" target="_parent">{t("contact_us")}</a> {t("immediately")}</p>
                         <a href="tel:+421904540178" className="btn custom-btn bg-color mt-3" data-aos="fade-up" data-aos-delay="300" data-toggle="modal" data-target="#membershipForm"><i className="fa fa-phone"></i> {t("make_appointment")}</a>

                     </div>

                     <div className="mr-lg-auto mt-5 mt-lg-0 mt-md-0 col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="800">
                         <div className="team-thumb">
                             <img src="images/RD.jpg" id="about-img" className="img-fluid" alt="Rumen Dimov" />

                             <div className="team-info d-flex flex-column">

                                 <h3>Rumen Dimov</h3>
                                 <span>Tattoo and body artist</span>

                                 <ul className="social-icon mt-3">
                                     <li><a target="_blank" href="https://www.facebook.com/rdtattoois/" className="fa fa-facebook"></a></li>
                                     <li><a target="_blank" href="https://www.instagram.com/rdtattooist/" className="fa fa-instagram"></a></li>
                                 </ul>
                             </div>
                         </div>
                     </div>

             </div>
        </div>
</section>
    )
}