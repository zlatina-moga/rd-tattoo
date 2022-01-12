export default function About(){
    return (
        <section className="about section" id="about">
        <div className="container">
             <div className="row">

                     <div className="mt-lg-5 mb-lg-0 mb-4 col-lg-5 col-md-10 mx-auto col-12">
                         <h2 className="mb-4" data-aos="fade-up" data-aos-delay="300">Welcome to RD Tattoo</h2>

                         <p data-aos="fade-up" data-aos-delay="400">Our goal is to be your friend and an ally in the ruthless and dynamic world of tattoos.

                            You are welcome with an idea in mind, and we'll be happy to assist you.</p>

                         <p data-aos="fade-up" data-aos-delay="500">If you have any questions, you can <a rel="nofollow" href="tel:+421904540178" target="_parent">contact us</a> immediately.</p>

                     </div>

                     <div className="mr-lg-auto mt-5 mt-lg-0 mt-md-0 col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="800">
                         <div className="team-thumb">
                             <img src="images/RD.jpeg" className="img-fluid" alt="Rumen Dimov" />

                             <div className="team-info d-flex flex-column">

                                 <h3>Rumen Dimov</h3>
                                 <span>Tattoo artist</span>

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