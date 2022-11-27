import { Link } from "react-router-dom";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";

export default function EditInventoryHeader() {

    return (
        <div className="new-inventory__title-wrapper">
          <Link to="/" className="new-inventory__back-link">
            <img
              className="new-inventory__back-button"
              src={arrowBack}
              alt="Arrow to direct user to main warehouse page"
            />
          </Link>
          <h1 className="new-inventory__title">Edit Inventory Item</h1>
        </div>
    )
}