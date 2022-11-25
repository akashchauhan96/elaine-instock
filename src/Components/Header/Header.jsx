import "./Header.scss";
import Logo from "../../assets/images/InStock-Logo_2x.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [warehouseActive, setWarehouseActive] = useState(true);
  const [inventoryActive, setInventoryActive] = useState(false);

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
              warehouseActive ? "header__nav-item--active" : ""
            }`}
            onClick={() => {
              navigate("/");
              setWarehouseActive(!warehouseActive);
              setInventoryActive(!inventoryActive);
            }}
          >
            Warehouses
          </div>
          <div
            className={`header__nav-item ${
              inventoryActive ? "header__nav-item--active" : ""
            }`}
            onClick={() => {
              navigate("/inventory");
              setInventoryActive(!inventoryActive);
              setWarehouseActive(!warehouseActive);
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
