import { useState } from "react";
import {useHistory} from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useTranslation } from "react-i18next";

export default function Contact() {
    const [state, setState] = useState({feedback: '', name: 'Name', email: 'email@example.com'});
    const history = useHistory();
    const { t } = useTranslation();
    const notify = () => toast('Email successfully sent!');

    const handleChange = (e) => {
        setState({feedback: e.currentTarget.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const templateId = 'template_urtsbj7';

        const formData = new FormData(e.currentTarget);
        let name = formData.get('cf-name');
        let email = formData.get('cf-email');
        let phone = formData.get('cf-phone')
        let message = formData.get('cf-message');

        sendFeedback(templateId, {message: message, phone: phone, from_name: name, reply_to: email})
    }

    const sendFeedback = (templateId, variables) => {
        window.emailjs.send(
            'service_zof2wa4', templateId,
            variables
        ).then (res => {
            notify()

            setTimeout(() => {
                history.push('/gallery')
            }, 2000)
            
        }).catch(err => console.error('Sorry, something went wrong: ', err))
    }

    return (
        <section className="contact section" id="contact">
        <div className="container">
             <div className="row">

                  <div className="ml-auto col-lg-5 col-md-6 col-12">
                      <h2 className="mb-4 pb-2" data-aos="fade-up" data-aos-delay="200">{t("ask_anything")}</h2>

                      <form onSubmit={onSubmit} className="contact-form webform" data-aos="fade-up" data-aos-delay="400">
                          <input type="text" className="form-control" name="cf-name" placeholder={t("name")} />

                          <input type="email" className="form-control" name="cf-email" placeholder="Email" />

                          <input type="tel" className="form-control" name="cf-phone" placeholder={t("phone")} />

                          <textarea onChange={handleChange} defaultValue={state.feedback} className="form-control" rows="5" name="cf-message" placeholder={t("message")}></textarea>

                          <button type="submit" className="form-control" id="submit-button" name="submit">{t("send_message")}</button>
                          <Toaster />
                      </form>
                  </div>

                  <div className="mx-auto mt-4 mt-lg-0 mt-md-0 col-lg-5 col-md-6 col-12">
                      <h2 className="mb-4" data-aos="fade-up" data-aos-delay="600">{t("find_us")}</h2>

                      <p data-aos="fade-up" data-aos-delay="800"><i className="fa fa-map-marker mr-1"></i>Martinčekova 783/17 82101 Bratislava, Slovakia</p>

                      <div className="google-map" data-aos="fade-up" data-aos-delay="900">
                      <iframe title="RD Tattoo address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.9302675734616!2d17.14851461564941!3d48.15014957922443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c892bd77ce2b9%3A0x1c1c1abc8856003c!2sMartin%C4%8Dekova%20783%2F17%2C%20821%2001%20Bratislava%2C%20Slovakia!5e0!3m2!1sen!2sro!4v1642746113117!5m2!1sen!2sro" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                      </div>
                  </div>
                  
             </div>
        </div>
   </section>
    )
}