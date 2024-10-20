function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>CAR</span> Rentals
              </li>
              <li>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </li>
              <li>
                <a href="tel:+91 8527454525">
                  <i className="fa-solid fa-phone"></i> &nbsp; (+91) 8527454525
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                carrentals@gmail.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; carrentals@xyz.com
                </a>
              </li>

              <li>
                <a
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://ankit5646.github.io/portfolio/"
                >
                  Design with ❤️ by Ankit & Ankit
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">

              {/* // Can be converted in links on further and make pages for them */}

              <li>Company</li>
              <li>
                <a href="#home">Gallery</a>
              </li>
              <li>
                <a href="#home">Careers</a>
              </li>
              <li>
                <a href="#home">Mobile</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
              <li>
                <a href="#home">How we work</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Fri: 9:00AM - 9:00PM</li>
              <li>Sat: 9:00AM - 5:00PM</li>
              <li>Sun: Closed</li>
            </ul>

            <ul className="footer-content__2">

               {/* Can be make that subscription button functional */}
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for Latest Offers , Discount news & updates.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
