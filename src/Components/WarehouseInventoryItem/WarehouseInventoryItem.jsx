import '../WarehouseInventoryItem/WarehouseInventoryItem.scss';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px-blue.svg';
import rightChevron from '../../assets/icons/chevron_right-24px.svg';
import { Link } from 'react-router-dom';

export default function WarehouseInventoryItem({ warehouseInventory }) {

    return (
        <>
        {warehouseInventory.map((inventory) => {
            const isInStock = inventory.quantity === 0 ? true : false;

            return (
            <div key={inventory.id} className='warehouseInventory'>
                <div className='warehouseInventory__container warehouseInventory__container--first'>
                    <div className='warehouseInventory__info warehouseInventory__info--first'>
                        <h4 className='warehouseInventory__title'>Inventory Item</h4>
                        <div className='warehouseInventory__nameWrapper'>
                            <Link to={`/inventory/${inventory.id}`} className='warehouseListItem__link'>
                                <h3 className='warehouseInventory__name'>{inventory.item_name}</h3>
                                <img src={rightChevron} alt="Right Chevron Icon" />
                             </Link>
                        </div>
                    </div>
                    <div className='warehouseInventory__info warehouseInventory__info--second'>
                        <h4 className='warehouseInventory__title'>Category</h4>
                        <p className='warehouseInventory__detail warehouseInventory__detail--table'>{inventory.category}</p>
                    </div>
                </div>
                <div className='warehouseInventory__container warehouseInventory__container--second'>
                    <div className='warehouseInventory__info  warehouseInventory__info--third'>
                        <h4 className='warehouseInventory__title'>Status</h4>
                        <h4 className={`warehouseInventory__detail ${isInStock ? "warehouseInventory__no-stock" : "warehouseInventory__in-stock"}`}>{inventory.status}</h4>
                    </div>
                    <div className='warehouseInventory__info warehouseInventory__info--fourth'>
                        <h4 className='warehouseInventory__title'>Qty</h4>
                        <p className='warehouseInventory__detail'>{inventory.quantity}</p>
                    </div>
                </div>
                <div className='warehouseInventory__icons'>
                    {/* Link to delete warehouse modal */}
                    <Link>
                        <img className='warehouseInventory__icon' src={deleteIcon} alt='Delete Icon' />
                    </Link>
                    <Link to={"/edit-warehouse"}>
                        <img className='warehouseInventory__icon' src={editIcon} alt='Edit Icon' />
                    </Link>
                </div>
            </div>
            )
        })}
        </>
    );
}