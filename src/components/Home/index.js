import Header from "../Header";
import FilterProducts from "../FilterProducts";
import Footer from "../Footer";
import { CiSearch } from "react-icons/ci";
import "./index.css";

const plantArray = [
  {
    id: 1,
    img: "https://res.cloudinary.com/surya192/image/upload/v1730051830/Ellipse_68_cfqlst_mtwqbw.png",
    details: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/surya192/image/upload/v1730051847/Ellipse_69_eyqeee_keurwt.png",
    details: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/surya192/image/upload/v1730051857/Ellipse_70_a1bmtz_bn4lm9.png",
    details: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/surya192/image/upload/v1730051869/Ellipse_71_pucvuz_ohs1do.png",
    details: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/surya192/image/upload/v1730051876/Ellipse_62_obivov_twhgeo.png",
    details: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
  },
  {
    id: 6,
    img: "https://res.cloudinary.com/surya192/image/upload/v1730051857/Ellipse_70_a1bmtz_bn4lm9.png",
    details: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
  },
  {
    id: 7,
    img: "https://res.cloudinary.com/surya192/image/upload/v1730051830/Ellipse_68_cfqlst_mtwqbw.png",
    details: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
  },
];

const Home = () => (
  <div className="bg-container">
    <div className="header">
      <p className="ship-para">Free Shipping on orders above 99</p>
      <p className="ph-para">Call us on: +91 9876805120</p>
    </div>
    <Header />
    <div className="search-bar-container">
      <div className="search-container">
        <CiSearch className="search-icon" />
        <input
          placeholder="Search Plant"
          type="search"
          id="input-search"
          className="search-input"
        />
        <img
          className="search-icon"
          src="https://s3-alpha-sig.figma.com/img/3a30/d80e/594c268f203b8704f61985100fae62d6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ECIAJtsSLBVXgl2YF31TxKtq5s0LuX-WtEAzq6FqsAwtmZqiS-DsBkPIwI7mmd0ENoIRLeFKfIjRs5lPiIOarypWJhPEpdI2MHEdJkN1xO7rPxfi6Fivh6LStPxif7cKgwH6k8~PerjWx0Mh5He89Sd3dhBBzSoVHJbRu3RrNjEiGdnLBB7zqjdkw-G736mL7wI656dFi0pWcNGgWTzpC8Gx8DZC4Xf34jdHqhDOfR4kbBMTDGR6JUiDdCwChwHow27J6anCaHgCGyxB2hSvt1vhj2sGVI2cstk7qHKKBVKVoJwELI3jKy9S17QquNjtZWTSwgOnlOFdC1vmzV3X6w__"
          alt="search-icon"
        />
      </div>
    </div>
    <div className="plants-section">
      <div className="header-row">
        <h1 className="option plants-option">Plants</h1>
        <h1 className="option pots-option">Pots</h1>
      </div>
      <p className="description">
        Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
        necessitatibus enim ut internos accusantium a numquam autem ab rerum
        omnis. Non molestiae ratione et laborum doloribus aut molestiae
        voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
        est voluptatem eius. Et architecto nihil id labore omnis hic iste
        deleniti et porro aspernatur.
      </p>
      <div className="nursery-section">
        <h1 className="nursery-headers">Nursery</h1>
        <div className="plant-list">
          {plantArray.map((item) => (
            <div key={item.id} className="plant-item">
              <img className="plant-image" src={item.img} alt={item.id} />
              <div className="detail-container">
                <p className="plant-details">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="filter-products-container">
        <FilterProducts />
      </div>
    </div>
    <div className="footer-container">
      <Footer />
    </div>
  </div>
);

export default Home;
