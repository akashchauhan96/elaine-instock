import "./OneInventoryItem.scss";
import EditIcon from "../../assets/icons/edit-white-24px.svg";
import BackArrow from "../../assets/icons/arrow_back-24px.svg";
import { useNavigate } from "react-router-dom";

function OneInventoryItem() {
  const navigate = useNavigate();
  return (
    <>
      <div className="inventory-item">
        <section className="inventory-item__header-wrapper">
          <div className="inventory-item__title-wrapper">
            <img
              src={BackArrow}
              alt="back arrow"
              onClick={() => navigate("/inventory")}
            />
            <h1>Television</h1>
          </div>
          <div
            className="inventory-item__edit-wrapper"
            onClick={() => navigate("/inventory/:id/edit")}
          >
            <img
              src={EditIcon}
              alt="edit icon"
              className="inventory-item__edit-icon"
            />
            <h2 className="inventory-item__edit">Edit</h2>
          </div>
        </section>
        <section className="inventory-item__details">
          <div className="inventory-item__description">
            <div className="inventory-item__details-item">
              <h4 className="inventory-item__subtitle">ITEM DESCRIPTION</h4>
              <p className="inventory-item__text">
                This 50", 4K LED TV provides a crystal-clear picture and vivid
                colors.
              </p>
            </div>
            <div className="inventory-item__details-item">
              <h4 className="inventory-item__subtitle">CATEGORY:</h4>
              <p>Electronics</p>
            </div>
          </div>
          <div className="inventory-item__status-wrapper">
            <div className="inventory-item__status-1">
              <div className="inventory-item__details-item">
                <h4 className="inventory-item__subtitle">Status:</h4>
                <p>IN STOCK</p>
              </div>
              <div className="inventory-item__details-item">
                <h4 className="inventory-item__subtitle">Warehouse:</h4>
                <p>Manhattan</p>
              </div>
            </div>
            <div className="inventory-item__status-2">
              <h4 className="inventory-item__subtitle">Quantity:</h4>
              <p>500</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default OneInventoryItem;
