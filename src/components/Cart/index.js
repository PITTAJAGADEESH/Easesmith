import { useNavigate } from "react-router-dom";
import "./index.css";

const Cart = () => {
  const navigate = useNavigate();
  const handleHomeNavigation = () => {
    navigate("/");
  };

  return (
    <div className="cart-main-container">
      <div className="cart-container">
        <div className="cart-header">
          <p className="cart-title">Your Cart</p>
          <hr className="hr-e" />
        </div>
        <div className="cart-content">
          <h1 className="order-confirmation">
            Congratulations <br /> Order Placed!
          </h1>
          <img
            className="cart-image"
            src="https://res.cloudinary.com/surya192/image/upload/v1730051716/plant_1_ytsfdt_fvx73c.jpg"
            alt="cart-img"
          />
          <p className="thank-you-message">
            Thank you for choosing Chaperone services. We will soon get in touch
            with you!
          </p>
          <div className="button-container">
            <button
              className="continue-shopping-button"
              onClick={handleHomeNavigation}
              type="button"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
