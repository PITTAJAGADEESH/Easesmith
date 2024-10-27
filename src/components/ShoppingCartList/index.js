import { useNavigate } from "react-router-dom";
import { v4 as generateUUID } from "uuid";
import "./index.css";

const ShoppingCartList = () => {
  const productArray = [
    {
      img: "https://res.cloudinary.com/surya192/image/upload/v1730051888/e1ce63ff429a0c018fd6e2e5dd614458_pekyro_tpbahw.jpg",
      name: "Monsterra",
      type: "Indoor Plant, Low maintenance",
      stars:
        "https://res.cloudinary.com/surya192/image/upload/v1730051956/image_10_sj67np_ynhlme.jpg",
      rating: "4.9",
      previousPrice: "₹ 359",
      currentPrice: "₹ 299",
    },
    {
      img: "https://res.cloudinary.com/surya192/image/upload/v1730051900/7973d62829a030074ad8b6ad34_wbdupl_rbrzbh.jpg",
      name: "Monsterra",
      type: "Indoor Plant, Low maintenance",
      stars:
        "https://res.cloudinary.com/surya192/image/upload/v1730051956/image_10_sj67np_ynhlme.jpg",
      rating: "4.9",
      previousPrice: "₹ 359",
      currentPrice: "₹ 299",
    },
    {
      img: "https://res.cloudinary.com/surya192/image/upload/v1730051908/daa994fdb511faa82ea79a5ef58fbb1a_fer6mu_tvpsge.jpg",
      name: "Monsterra",
      type: "Indoor Plant, Low maintenance",
      stars:
        "https://res.cloudinary.com/surya192/image/upload/v1730051956/image_10_sj67np_ynhlme.jpg",
      rating: "4.9",
      previousPrice: "₹ 359",
      currentPrice: "₹ 299",
    },
  ];

  const navigate = useNavigate();

  const handleViewProduct = (name) => {
    navigate(`/thankyou/${name}`);
  };

  const handleAddToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="product-list">
      {productArray.map((item) => (
        <div className="product-item" key={generateUUID()}>
          <div className="image-wrapper">
            <img className="product-image" src={item.img} alt={item.name} />
            <button
              onClick={() => handleViewProduct(item.name)}
              className="view-product-button"
            >
              View Product
            </button>
          </div>
          <div className="product-info-container">
            <h1 className="plant-head">{item.name}</h1>
            <p className="plant-type">{item.type}</p>
            <div className="rating-wrapper">
              <img
                className="rating-stars"
                src={item.stars}
                alt="rating-stars"
              />
              <p className="product-rating">{item.rating}</p>
            </div>
            <div className="price-info">
              <p className="previous-price">{item.previousPrice}</p>
              <p className="current-price">{item.currentPrice}</p>
            </div>
            <div className="action-buttons">
              <button className="add-to-cart-button" onClick={handleAddToCart}>
                - Add to cart +
              </button>
              <button className="rent-button">Buy on Rent</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCartList;
