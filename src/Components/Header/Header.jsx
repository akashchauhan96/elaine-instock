import "./Header.scss";
import Logo from "../../assets/images/InStock-Logo_2x.png";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

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
        <NavLink className={({isActive}) => 
           `header__nav-item ${isActive ? "header__nav-item--active" : ""}`
        } to={'/warehouses'} >Warehouses</NavLink>
        <NavLink className={({isActive}) => 
          `header__nav-item ${isActive ? "header__nav-item--active" : ""}`
        } to={'/inventory'}>Inventory</NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
