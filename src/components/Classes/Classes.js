import { useTranslation } from "react-i18next";

export default function Classes() {
    const { t } = useTranslation();

    return (
        <section className="class section" id="class">
        <div className="container">
             <div className="row">

                     <div className="col-lg-12 col-12 text-center mb-5 ">
                         <h6 data-aos="fade-up">{t("build_a_lifestyle")}</h6>

                         <h2 data-aos="fade-up" data-aos-delay="200">{t("our_courses")}</h2>
                         
                      </div>

                     <div className="col-lg-4 col-md-6 col-12 classesInfo" data-aos="fade-up" data-aos-delay="400">
                         <div className="class-thumb ">
                             <img src="images/tattoo.jpeg" className="img-fluid" alt="Class" />

                             <div className="class-info">
                                 <h3 className="mb-1">{t("tattoo_course")}</h3>

                                 <span><strong>{t("trained_by")}</strong> - Rumen Dimov</span>

                                 <p className="mt-3">{t("tattoo_course_info")}</p>
                                 <a className="btn custom-btn bg-color mt-3" href="mailto:rdtats@gmail.com">{t("get_in_touch")}</a>

                             </div>
                         </div>
                     </div>

                     <div className="mt-5 mt-lg-0 col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="600">
                         <div className="class-thumb">

                             <div className="classesInfo">
                                 <h3 className="mb-1">{t("tattoo_and_piercing_courses")}</h3>

                                 <span><strong>{t("trained_by")}</strong> - Rumen Dimov</span>

                                 <p className="mt-3">{t("we_provide_courses_info")}</p>
                                 <a href="tel:+421904540178" className="btn custom-btn bg-color mt-3" data-aos="fade-up" data-aos-delay="300" data-toggle="modal" data-target="#membershipForm"><i className="fa fa-phone"></i> {t("make_appointment")}</a>
                             </div>
                         </div>
                     </div>

                     <div className="mt-5 mt-lg-0 col-lg-4 col-md-6 col-12 classesInfo" data-aos="fade-up" data-aos-delay="600">
                         <div className="class-thumb">
                             <img src="images/piercing.jpeg" className="img-fluid" alt="Class" />

                             <div className="class-info">
                                 <h3 className="mb-1">{t("piercing_course")}</h3>

                                 <span><strong>{t("trained_by")}</strong> - Rumen Dimov</span>

                                 <p className="mt-3">{t("learn_crucial_skills")}</p>
                                 <a className="btn custom-btn bg-color mt-3" href="mailto:rdtats@gmail.com">{t("get_in_touch")}</a>
                             </div>
                         </div>
                     </div>

             </div>
        </div>
</section>
    )
}