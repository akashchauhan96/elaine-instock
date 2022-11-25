import "./DeleteWH.scss";
import CloseIcon from "../../assets/icons/close-24px.svg";
import axios from "axios";
import { useEffect, useState } from "react";

function DeleteWH({ setOpenModal, warehouse }) {
  const urlWarehouse = `http://localhost:8080/warehouse/${warehouse.id}`;
  console.log(warehouse);
  const handleDeleteWarehouse = (event) => {
    axios.delete(`${urlWarehouse}`).catch((error) => {
      console.log(error);
    });
  };
  return (
    <div
      className="delete__darkBG delete__centered"
      onClick={() => setOpenModal(false)}
    >
      <div>
        <div className="delete">
          <div className="delete__container">
            <div className="delete__icon-wrapper">
              <img
                src={CloseIcon}
                alt="close icon"
                className="delete__icon"
                onClick={() => {
                  setOpenModal(false);
                }}
              />
            </div>
            <div className="delete__text-wrapper">
              <h1 className="delete__title">
                Delete {warehouse.warehouse_name} warehouse?
              </h1>
              <p className="delete__body">
                Please confirm that you'd like to delete the{" "}
                {warehouse.warehouse_name} from the list of warehouses. You
                won't be able to undo this action.
              </p>
            </div>
            <div className="delete__button-wrapper">
              <button
                className="delete__button delete__button-cancel"
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </button>
              <button
                className="delete__button delete__button-delete"
                onClick={handleDeleteWarehouse}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteWH;
