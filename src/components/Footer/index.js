import { FaInstagram as InstagramIcon } from "react-icons/fa";
import { v4 as generateUUID } from "uuid";
import { FaFacebook as FacebookIcon } from "react-icons/fa";
import { BsFillThreadsFill as ThreadsIcon } from "react-icons/bs";
import { FaYoutube as YoutubeIcon } from "react-icons/fa";
import { FaLinkedin as LinkedInIcon } from "react-icons/fa6";
import "./index.css";

const aboutList = [
  "Our Story",
  "Blogs",
  "Careers",
  "Contact Us",
  "Help & Support",
];

const servicesList = [
  "Book maali",
  "Plant Day Care",
  "Rent Plants",
  "Plants & Pots",
  "Gardening Tools",
];

const linksList = [
  "My Account",
  "Orders & Returns",
  "Track Order",
  "Terms & Conditions",
  "Privacy Policy",
  "Return, Refund & Replacement Policy",
];

const contactDetails = [
  "Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57, Gurgaon, Haryana, India 122003",
  "Call: +919958287272",
  "Email: care@chaperoneplants.com",
];

const Footer = () => (
  <div className="footer-container">
    <div className="footer-content">
      <div className="subscription-card">
        <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
        <p>
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
          necessitatibus enim
        </p>
        <input
          id="email-input"
          className="email-input"
          type="search"
          placeholder="Enter Your Email Address"
        />
        <button className="subscribe-button" type="button">
          SUBSCRIBE
        </button>
      </div>

      <div className="about-card">
        <h1>ABOUT US</h1>
        <ul>
          {aboutList.map((item) => (
            <li key={generateUUID()}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="services-card">
        <h1>OUR SERVICES</h1>
        <ul>
          {servicesList.map((item) => (
            <li key={generateUUID()}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="links-card">
        <h1>USEFUL LINKS</h1>
        <ul>
          {linksList.map((item) => (
            <li key={generateUUID()}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="contact-card">
        <h1>GET IN TOUCH</h1>
        <ul>
          {contactDetails.map((item) => (
            <li key={generateUUID()}>{item}</li>
          ))}
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <h1>CHAPERONE</h1>
      <p>
        Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
        necessitatibus enim ut internos accusantium a numquam autem ab rerum
        omnis. Non molestiae ratione et laborum doloribus aut molestiae
        voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
        est voluptatem eius. Et architecto nihil id labore omnis hic iste
        deleniti et porro aspernatur.
      </p>
    </div>

    <div className="social-media-container">
      <h1>Follow us on</h1>
      <div className="social-media-icons">
        <InstagramIcon />
        <FacebookIcon />
        <ThreadsIcon />
        <YoutubeIcon />
        <LinkedInIcon />
      </div>
    </div>

    <hr />
    <div className="footer-copyright">
      <p>© 2023, chaperone.com All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
