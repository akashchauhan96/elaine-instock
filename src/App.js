import { BrowserRouter, Routes, Route } from "react-router-dom";
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
              <Route path="/" element={<WarehouseList />} />
              <Route
                path="/warehouse/:warehouseId"
                element={<SelectedWarehouse />}
              />
              <Route path="/add-warehouse" element={<AddWarehouse />} />
              {/* <Route path="/edit-warehouse" element={<EditWarehouse />} />
                  <Route path="/inventory-list" element={<InventoryList />} />
                  <Route path="/inventory-item" element={<InventoryItem />} />
                  <Route path="/edit-inventory-item" element={<EditInventoryItem />} />
                  <Route path="/add-inventory-item" element={<AddInventoryItem />} /> */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
