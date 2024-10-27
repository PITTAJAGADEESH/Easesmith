import React, { useState } from "react";
import { RxPerson } from "react-icons/rx";
import { v4 as uuidv4 } from "uuid";
import { BsCart2 } from "react-icons/bs";
import { FaCaretDown, FaCaretUp } from "react-icons/fa"; // Import caret icons
import "./index.css";

const ToolsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="nav-option" type="button" onClick={toggleDropdown}>
        Tools {isOpen ? <FaCaretUp /> : <FaCaretDown />}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>Tool 1</li>
          <li>Tool 2</li>
          <li>Tool 3</li>
        </ul>
      )}
    </div>
  );
};

const PlantsAndPots = () => <p className="plants-pots-option">Plants & Pots</p>;

const OurServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="nav-option" type="button" onClick={toggleDropdown}>
        Our Services {isOpen ? <FaCaretUp /> : <FaCaretDown />}{" "}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
        </ul>
      )}
    </div>
  );
};

const options = [
  "Home",
  <PlantsAndPots key={uuidv4()} />,
  <ToolsDropdown key={uuidv4()} />,
  <OurServicesDropdown key={uuidv4()} />,
  "Blog",
  "Our Story",
  "FAQs",
];

const Header = () => (
  <div className="navbar-container">
    <div className="company-icon">
      <img
        className="company-logo"
        src="https://res.cloudinary.com/surya192/image/upload/v1730051815/image_55_ijmivu_exuppl.png"
        alt="company-icon"
      />
      <h1 className="name">Chaperone</h1>
    </div>
    <div className="options-container">
      <ul className="list-items">
        {options.map((item) => (
          <li className="list-arrange" key={uuidv4()}>
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="icon-edit">
      <div className="icons">
        <RxPerson className="icon-size" />
        <p className="icon-p">My Profile</p>
      </div>
      <div className="icons">
        <BsCart2 className="icon-size" />
        <p className="icon-p">Cart</p>
      </div>
    </div>
  </div>
);

export default Header;
