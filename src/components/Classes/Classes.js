import './Classes.css'

export default function Classes() {
    return (
        <section className="class section" id="class">
        <div className="container">
             <div className="row">

                     <div className="col-lg-12 col-12 text-center mb-5 ">
                         <h6 data-aos="fade-up">new way to build a lifestyle!</h6>

                         <h2 data-aos="fade-up" data-aos-delay="200">Our Training Classes</h2>
                         
                      </div>

                     <div className="col-lg-4 col-md-6 col-12 classesInfo" data-aos="fade-up" data-aos-delay="400">
                         <div className="class-thumb ">
                             <img src="images/tattoo.jpeg" className="img-fluid" alt="Class" />

                             <div className="class-info">
                                 <h3 className="mb-1">Tattoo</h3>

                                 <span><strong>Trained by</strong> - Rumen Dimov</span>

                                 <p className="mt-3">You will learn everything from setting up needles and skin preparation to tattoo technics and secrets.</p>
                                 <a className="btn custom-btn bg-color mt-3" href="mailto:rdtats@gmail.com">Check availability</a>

                             </div>
                         </div>
                     </div>

                     <div className="mt-5 mt-lg-0 col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="600">
                         <div className="class-thumb">

                             <div className="classesInfo">
                                 <h3 className="mb-1">Tattoo and Piercing Classes</h3>

                                 <span><strong>Trained by</strong> - Rumen Dimov</span>

                                 <p className="mt-3">We provide a professional training for beginners and you can become an expert in this fast growing industry, that opens up a whole diverse world of body modifications. Each course consists of theory and practical lessons. And yes, you can make tattoos/ piercing on yourself or some of your friends. Sign in today on email or telephone.</p>
                                 <a href="tel:+421904540178" className="btn custom-btn bg-color mt-3" data-aos="fade-up" data-aos-delay="300" data-toggle="modal" data-target="#membershipForm"><i className="fa fa-phone"></i> Make an appointment today</a>
                             </div>
                         </div>
                     </div>

                     <div className="mt-5 mt-lg-0 col-lg-4 col-md-6 col-12 classesInfo" data-aos="fade-up" data-aos-delay="600">
                         <div className="class-thumb">
                             <img src="images/piercing.jpeg" className="img-fluid" alt="Class" />

                             <div className="class-info">
                                 <h3 className="mb-1">Piercing</h3>

                                 <span><strong>Trained by</strong> - Rumen Dimov</span>

                                 <p className="mt-3">Learn the crucial skills needed to become a body piercing professional.</p>
                                 <a className="btn custom-btn bg-color mt-3" href="mailto:rdtats@gmail.com">Check availability</a>
                             </div>
                         </div>
                     </div>

             </div>
        </div>
</section>
    )
}