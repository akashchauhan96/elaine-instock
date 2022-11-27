import { Link } from "react-router-dom";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import './EditInventoryHeader.scss'

export default function EditInventoryHeader() {

    return (
        <div className="edit-inventory__title-wrapper">
          <Link to="/" className="edit-inventory__back-link">
            <img
              className="edit-inventory__back-button"
              src={arrowBack}
              alt="Arrow to direct user to main warehouse page"
            />
          </Link>
          <h1 className="edit-inventory__title">Edit Inventory Item</h1>
        </div>
    )
}