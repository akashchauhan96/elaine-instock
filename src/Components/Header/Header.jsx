import "./Header.scss";
import Logo from "../../assets/images/InStock-Logo_2x.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  // just love useNavigate a lot more than NavLink since it doesn't mess up styling! using State to set active/inactive state of nav-items
  const navigate = useNavigate();
  const [active, setActive] = useState(null);

  return (
    <header className="header">
      <div className="header__container">
        <img
          onClick={() => navigate("/")}
          src={Logo}
          alt="intock logo"
          className="header__logo"
        />

        <div className="header__nav">
          <div
            className={`header__nav-item ${
              active ? "header__nav-item--active" : ""
            }`}
            onClick={() => {
              // upon click 2 events happen: the item will be given active class if not already, and vice versa + navigate to the appropriate page
              navigate("/");
              setActive(!active);
            }}
          >
            Warehouses
          </div>
          <div
            // there is a strange bug now. When I click on one item, it makes both of them active at the same time. and both inactive at same time. trying to find the cause and fix it!
            className={`header__nav-item ${
              active ? "header__nav-item--active" : ""
            }`}
            onClick={() => {
              navigate("/inventory-list");
              setActive(!active);
            }}
          >
            Inventory
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
