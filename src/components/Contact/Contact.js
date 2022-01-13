export default function Contact() {

    /*
    <!-- How to change your own map point
  1. Go to Google Maps
  2. Click on your location point
  3. Click "Share" and choose "Embed map" tab
  4. Copy only URL and paste it within the src="" field below
    -->*/
    
    return (
        <section className="contact section" id="contact">
        <div className="container">
             <div className="row">

                  <div className="ml-auto col-lg-5 col-md-6 col-12">
                      <h2 className="mb-4 pb-2" data-aos="fade-up" data-aos-delay="200">Feel free to ask anything</h2>

                      <form action="#" method="post" className="contact-form webform" data-aos="fade-up" data-aos-delay="400" role="form">
                          <input type="text" className="form-control" name="cf-name" placeholder="Name" />

                          <input type="email" className="form-control" name="cf-email" placeholder="Email" />

                          <textarea className="form-control" rows="5" name="cf-message" placeholder="Message"></textarea>

                          <button type="submit" className="form-control" id="submit-button" name="submit">Send Message</button>
                      </form>
                  </div>

                  <div className="mx-auto mt-4 mt-lg-0 mt-md-0 col-lg-5 col-md-6 col-12">
                      <h2 className="mb-4" data-aos="fade-up" data-aos-delay="600">Where you can <span>find us</span></h2>

                      <p data-aos="fade-up" data-aos-delay="800"><i className="fa fa-map-marker mr-1"></i>Martinčekova 783/17 82101 Bratislava, Slovakia</p>

                      <div className="google-map" data-aos="fade-up" data-aos-delay="900">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d5662901.7114417385!2d16.754672771460427!3d46.12906246465847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d45.610814!2d25.4607332!4m3!3m2!1d48.11795!2d17.111069999999998!5e0!3m2!1sen!2sro!4v1642067942971!5m2!1sen!2sro" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                      </div>
                  </div>
                  
             </div>
        </div>
   </section>
    )
}