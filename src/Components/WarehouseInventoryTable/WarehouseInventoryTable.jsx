import sortIcon from "../../assets/icons/sort-24px.svg";
import './WarehouseInventoryTable.scss';


export default function WarehouseInventory() {
    
    return (
    <>
            <div className='warehouseInventoryTable'>
            <div className='warehouseInventoryTable__column warehouseInventoryTable__column--first'>
                <h4>Inventory Item</h4>
                <img src={sortIcon} alt="Sort Icon" />
            </div>
            <div className='warehouseInventoryTable__column warehouseInventoryTable__column--second'>
                <h4>Category</h4>
                <img src={sortIcon} alt="Sort Icon" />
            </div>
            <div className='warehouseInventoryTable__column warehouseInventoryTable__column--third'>
                <h4>Status</h4>
                <img src={sortIcon} alt="Sort Icon" />
            </div>
            <div className='warehouseInventoryTable__column warehouseInventoryTable__column--fourth'>
                <h4>Quantity</h4>
                <img src={sortIcon} alt="Sort Icon" />
            </div>
            <div className='warehouseInventoryTable__column warehouseInventoryTable__column--fifth'>
                <h4>Actions</h4>
            </div>
            </div>
    </>
    )
}