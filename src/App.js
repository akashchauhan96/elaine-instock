import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WarehouseList from "./pages/WarehouseList/WarehouseList";
import SelectedWarehouse from "./pages/SelectedWarehouse/SelectedWarehouse";
import AddWarehouse from "./pages/AddWarehouse/AddWarehouse";
import EditWarehouse from "./pages/EditWarehouse/EditWarehouse";
import InventoryList from "./pages/InventoryList/InventoryList";
import InventoryItem from "./pages/InventoryItem/InventoryItem";
import EditInventoryItem from "./pages/EditInventoryItem/EditInventoryItem";
import AddInventoryItem from "./pages/AddInventoryItem/AddInventoryItem";
import Header from "./Components/Header/Header";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="main__background">
          <div className="main__content">
            <Routes>
              <Route
                path="/"
                element={<Navigate to="/warehouses" replace={true} />}
              />
              <Route path="/warehouses" element={<WarehouseList />} />
              <Route
                path="/warehouses/:warehouseId"
                element={<SelectedWarehouse />}
              />
              <Route path="/warehouses/add" element={<AddWarehouse />} />
              <Route path="/warehouses/:id/edit" element={<EditWarehouse />} />
              <Route path="/inventory" element={<InventoryList />} />
              <Route path="/inventory/:id" element={<InventoryItem />} />
              <Route
                path="/inventory/:id/edit"
                element={<EditInventoryItem />}
              />
              <Route path="/inventory/add" element={<AddInventoryItem />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
