import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";

function Contact() {
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
              Get in touch with us for inquiries, bookings, support or request more car models. We're here to assist you with all your car rental needs.
              </p>
              <a href="/">
                <i className="fa-solid fa-phone"></i>&nbsp; (+91) 8527454525
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                carrental@xyz.com
              </a>
              <a href="/">
                <i className="fa-solid fa-location-dot"></i>&nbsp; Noida,
                Uttar Pradesh | (NCR)
              </a>
            </div>
            <div className="contact-div__form">

              {/* // Make this astriks ( * ) working. */}
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Joe Shmoe"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.."></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send
                  Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Car booking is just a call away</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>(+91) 8527454525</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
