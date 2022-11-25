import '../WarehouseInventoryItem/WarehouseInventoryItem.scss';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px-blue.svg';
import rightChevron from '../../assets/icons/chevron_right-24px.svg';
import { Link } from 'react-router-dom';

export default function WarehouseInventoryItem({ warehouseInventory }) {

    return (
        <>
        {warehouseInventory.map((inventory) => {
            return (
            <div key={inventory.id} className='warehouseListItem'>
                <div className='warehouseListItem__container warehouseListItem__container--first'>
                    <div className='warehouseListItem__info warehouseListItem__info--first'>
                        <h4 className='warehouseListItem__title'>Inventory Item</h4>
                            <div className='warehouseListItem__nameWrapper'>
                                <h3 className='warehouseListItem__name'>{inventory.item_name}</h3>
                                <img src={rightChevron} alt="Right Chevron Icon" />
                             </div>
                            </div>
                        <div className='warehouseListItem__info warehouseListItem__info--second'>
                            <h4 className='warehouseListItem__title'>Category</h4>
                            <p className='warehouseListItem__detail'>{inventory.category}</p>
                        </div>
                    </div>
                    <div className='warehouseListItem__container warehouseListItem__container--second'>
                        <div className='warehouseListItem__info  warehouseListItem__info--third'>
                            <h4 className='warehouseListItem__title'>Status</h4>
                            <p className='warehouseListItem__detail'>{inventory.status}</p>
                        </div>
                        <div className='warehouseListItem__info warehouseListItem__info--fourth'>
                            <h4 className='warehouseListItem__title'>Qty</h4>
                            <p className='warehouseListItem__detail'>{inventory.quantity}</p>
                        </div>
                    </div>
                    <div className='warehouseListItem__icons'>
                        {/* Link to delete warehouse modal */}
                        <Link>
                            <img className='warehouseListItem__icon' src={deleteIcon} alt='Delete Icon' />
                        </Link>
                        <Link to={"/edit-warehouse"}>
                            <img className='warehouseListItem__icon' src={editIcon} alt='Edit Icon' />
                        </Link>
                    </div>
            </div>
            )
        })}
        </>
    );
}