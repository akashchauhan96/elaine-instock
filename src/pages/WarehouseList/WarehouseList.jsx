import WarehouseListHeader from "../../Components/WarehouseListHeader/WarehouseListHeader";
import WarehouseListTable from "../../Components/WarehouseListTable/WarehouseListTable";
import { useState } from "react";
import "./WarehouseList.scss";

function WarehouseList() {
  return (
    <>
      <WarehouseListHeader />
      <WarehouseListTable />
    </>
  );
}
export default WarehouseList;
