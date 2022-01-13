export default function Navigation(){
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">

            <a className="navbar-brand" href="/">RD TATTOO</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-lg-auto">

                    <li className="nav-item">
                        <a href="/about" className="nav-link smoothScroll">About Us</a>
                    </li>

                    <li className="nav-item">
                        <a href="/classes" className="nav-link smoothScroll">Classes</a>
                    </li>

                    <li className="nav-item">
                        <a href="/gallery" className="nav-link smoothScroll">Gallery</a>
                    </li>

                    <li className="nav-item">
                        <a href="/contact" className="nav-link smoothScroll">Contact</a>
                    </li>
                </ul>

                <ul className="social-icon ml-lg-3">
                    <li><a target="_blank" href="https://www.facebook.com/rdtattoois/" className="fa fa-facebook"></a></li>
                    <li><a target="_blank" href="https://www.instagram.com/rdtattooist/" className="fa fa-instagram"></a></li>
                    <li><a href="tel:+421904540178"><i className="fa fa-phone"></i></a></li>
                </ul>
            </div>

        </div>
    </nav>
    )
}