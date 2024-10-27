import ShoppingCartList from "../ShoppingCartList";
import "./index.css";

const filterOptions = [
  { name: "Filter", symbol: "CLEAR ALL" },
  { name: "Type of Plants", symbol: "+" },
  { name: "Price", symbol: "+" },
  { name: "Nursery", symbol: "+" },
  { name: "Location", symbol: "+" },
  { name: "Indoor/Outdoor", symbol: "+" },
  { name: "Maintenance", symbol: "+" },
  { name: "Plant", symbol: "+" },
  { name: "Schedule", symbol: "+" },
  { name: "Color", symbol: "+" },
  { name: "Seasonal", symbol: "+" },
  { name: "Light", symbol: "+" },
];

const toggleDropdown = (event) => {
  const dropdownMenu = event.currentTarget.nextElementSibling;
  dropdownMenu.classList.toggle("show");
};

const FilterProducts = () => (
  <div className="filter-products-container">
    <ul className="filter-options-list">
      {filterOptions.map((item) => (
        <li key={item.name} className="filter-option-item">
          <p className="filter-option-name">{item.name}</p>
          <p className="filter-option-symbol">{item.symbol}</p>
        </li>
      ))}
    </ul>
    <div className="product-value">
      <div className="product-count">
        <p className="count-edit">300 products</p>
        <div className="dropdown">
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            SORT BY
          </button>
          <div className="dropdown-menu">
            <div className="dropdown-item">Option 1</div>
            <div className="dropdown-item">Option 2</div>
            <div className="dropdown-item">Option 3</div>
          </div>
        </div>
      </div>
      <div className="cart-items-list">
        <ShoppingCartList />
        <ShoppingCartList />
        <ShoppingCartList />
        <button className="view-button" type="button">
          View More
        </button>
      </div>
    </div>
  </div>
);

export default FilterProducts;
