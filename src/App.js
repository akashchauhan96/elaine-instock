import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SelectedWarehouse from "./pages/SelectedWarehouse/SelectedWarehouse";
import AddWarehouse from "./pages/AddWarehouse/AddWarehouse";
import EditWarehouse from "./pages/EditWarehouse/EditWarehouse";
import InventoryList from "./pages/InventoryList/InventoryList";
import InventoryItem from "./pages/InventoryItem/InventoryItem";
import EditInventoryItem from "./pages/EditInventoryItem/EditInventoryItem";
import AddInventoryItem from "./pages/AddInventoryItem/AddInventoryItem";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<SelectedWarehouse />} />
          <Route path="/add-warehouse" element={<AddWarehouse />} />
          <Route path="/edit-warehouse" element={<EditWarehouse />} />
          <Route path="/inventory-list" element={<InventoryList />} />
          <Route path="/inventory-item" element={<InventoryItem />} />
          <Route path="/edit-inventory-item" element={<EditInventoryItem />} />
          <Route path="/add-inventory-item" element={<AddInventoryItem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
