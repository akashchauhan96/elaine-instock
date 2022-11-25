import "./WarehouseListTable.scss";
import WarehouseListItem from "../WarehouseListItem/WarehouseListItem";
import sortIcon from "../../assets/icons/sort-24px.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../../utils/util";

function WarehouseListTable({ openModal, setOpenModal }) {
  const [warehouses, setWarehouses] = useState(null);

  useEffect(() => {
    axios
      .get(URL + "/warehouse")
      .then((response) => {
        setWarehouses(response.data);
      })
      .catch((err) => {
        console.log(
          `An error occured while trying to access the warehouses: ${err}`
        );
      });
  }, []);

  if (!warehouses) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="warehouseListTable">
        <div className="warehouseListTable__column warehouseListTable__column--first">
          <h4>Warehouse</h4>
          <img src={sortIcon} alt="Sort Icon" />
        </div>
        <div className="warehouseListTable__column warehouseListTable__column--second">
          <h4>Address</h4>
          <img src={sortIcon} alt="Sort Icon" />
        </div>
        <div className="warehouseListTable__column warehouseListTable__column--third">
          <h4>Contact Name</h4>
          <img src={sortIcon} alt="Sort Icon" />
        </div>
        <div className="warehouseListTable__column warehouseListTable__column--fourth">
          <h4>Contact Information</h4>
          <img src={sortIcon} alt="Sort Icon" />
        </div>
        <div className="warehouseListTable__column warehouseListTable__column--fifth">
          <h4>Actions</h4>
        </div>
      </div>
      {/* Display warehouses conatined within array in warehouses state variable */}
      {warehouses.map((warehouse) => {
        // Checks to see if it is the last warehouse in the list and pass as prop to remove border
        return (
          <WarehouseListItem
            key={warehouse.id}
            warehouse={warehouse}
            isLastWarehouse={
              warehouse.id === warehouses[warehouses.length - 1].id
                ? true
                : false
            }
          />
        );
      })}
    </>
  );
}

export default WarehouseListTable;
