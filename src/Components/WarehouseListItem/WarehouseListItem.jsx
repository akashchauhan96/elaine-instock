import "./WarehouseListItem.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px-blue.svg";
import rightChevron from "../../assets/icons/chevron_right-24px.svg";
import { Link } from "react-router-dom";
import DeleteWH from "../DeleteWH/DeleteWH";
import { useState } from "react";

function WarehouseListItem({
  warehouse,
  isLastWarehouse,
  setIsDeleted,
  isDeleted,
}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    // Remove border of last warehouse in table
    <div
      className={`warehouseListItem ${
        isLastWarehouse ? "warehouseListItem--noBorder" : ""
      }`}
    >
      <div className="warehouseListItem__container warehouseListItem__container--first">
        <div className="warehouseListItem__info warehouseListItem__info--first">
          <h4 className="warehouseListItem__title">Warehouse</h4>
          <div className="warehouseListItem__nameWrapper">
            <Link
              className="warehouseListItem__link"
              to={`/warehouses/${warehouse.id}`}
            >
              <h3 className="warehouseListItem__name">
                {warehouse.warehouse_name}
              </h3>
              <img src={rightChevron} alt="Right Chevron Icon" />
            </Link>
          </div>
        </div>
        <div className="warehouseListItem__info warehouseListItem__info--second">
          <h4 className="warehouseListItem__title">Address</h4>
          <p className="warehouseListItem__detail">{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</p>
        </div>
      </div>
      <div className="warehouseListItem__container warehouseListItem__container--second">
        <div className="warehouseListItem__info  warehouseListItem__info--third">
          <h4 className="warehouseListItem__title">Contact Name</h4>
          <p className="warehouseListItem__detail">{warehouse.contact_name}</p>
        </div>
        <div className="warehouseListItem__info warehouseListItem__info--fourth">
          <h4 className="warehouseListItem__title">Contact Information</h4>
          <p className="warehouseListItem__detail">{warehouse.contact_phone}</p>
          <p className="warehouseListItem__detail">{warehouse.contact_email}</p>
        </div>
      </div>
      <div className="warehouseListItem__icons">
        <img
          className="warehouseListItem__icon"
          src={deleteIcon}
          alt="Delete Icon"
          onClick={() => {
            setOpenModal(!openModal);
          }}
        />
        <Link to={`/warehouses/${warehouse.id}/edit`}>
          <img
            className="warehouseListItem__icon"
            src={editIcon}
            alt="Edit Icon"
          />
        </Link>
      </div>
      {openModal && (
        <DeleteWH
          setOpenModal={setOpenModal}
          warehouse={warehouse}
          setIsDeleted={setIsDeleted}
          isDeleted={isDeleted}
        />
      )}
    </div>
  );
}

export default WarehouseListItem;
