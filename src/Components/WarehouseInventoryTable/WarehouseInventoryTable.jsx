import sortIcon from "../../assets/icons/sort-24px.svg";
import './WarehouseInventoryTable.scss';


export default function WarehouseInventory() {
    
    return (
    <>
            <div className='warehouseListTable'>
            <div className='warehouseListTable__column warehouseListTable__column--first'>
                <h4>Warehouse</h4>
                <img src={sortIcon} alt="Sort Icon" />
            </div>
            <div className='warehouseListTable__column warehouseListTable__column--second'>
                <h4>Address</h4>
                <img src={sortIcon} alt="Sort Icon" />
            </div>
            <div className='warehouseListTable__column warehouseListTable__column--third'>
                <h4>Contact Name</h4>
                <img src={sortIcon} alt="Sort Icon" />
            </div>
            <div className='warehouseListTable__column warehouseListTable__column--fourth'>
                <h4>Contact Information</h4>
                <img src={sortIcon} alt="Sort Icon" />
            </div>
            <div className='warehouseListTable__column warehouseListTable__column--fifth'>
                <h4>Actions</h4>
            </div>
            </div>
    </>
    )
}