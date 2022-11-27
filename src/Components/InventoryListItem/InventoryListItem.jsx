import './InventoryListItem.scss';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px-blue.svg';
import rightChevron from '../../assets/icons/chevron_right-24px.svg';
import { Link } from 'react-router-dom';

function InventoryListItem({ inventory, isLastInventory }) {

    if (!inventory) {
        return;
    }

    return (
        // Remove border of last warehouse in table
        <div className={`inventoryListItem ${isLastInventory ? "inventoryListItem--noBorder" : ""}`}>
            <div className='inventoryListItem__container inventoryListItem__container--first'>
                <div className='inventoryListItem__info inventoryListItem__info--first'>
                    <h4 className='inventoryListItem__title'>Inventory Item</h4>
                    <div className='inventoryListItem__nameWrapper'>
                        <Link className='inventoryListItem__link' to={`/inventory/${inventory.id}`}>
                            <h3 className='inventoryListItem__name'>{inventory.item_name}</h3>
                            <img className='inventoryListItem__img' src={rightChevron} alt="Right Chevron Icon" />
                        </Link>
                    </div>
                </div>
                <div className='inventoryListItem__info inventoryListItem__info--second'>
                    <h4 className='inventoryListItem__title'>Category</h4>
                    <p className='inventoryListItem__detail'>{inventory.category}</p>
                </div>
            </div>
            <div className='inventoryListItem__container inventoryListItem__container--second'>
                <div className='inventoryListItem__info  inventoryListItem__info--third'>
                    <h4 className='inventoryListItem__title'>Status</h4>
                    <h4 className={`inventoryListItem__detail ${inventory.status === "In Stock" ? "inventoryListItem__detail--inStock" : "inventoryListItem__detail--outOfStock"}`}>{inventory.status}</h4>
                </div>
                <div className='inventoryListItem__info inventoryListItem__info--fourth'>
                    <h4 className='inventoryListItem__title'>QTY</h4>
                    <p className='inventoryListItem__detail'>{inventory.quantity}</p>
                </div>
                <div className='inventoryListItem__info inventoryListItem__info--fifth'>
                    <h4 className='inventoryListItem__title'>Warehouse</h4>
                    <p className='inventoryListItem__detail'>{inventory.warehouse_name}</p>
                </div>
            </div>
            <div className='inventoryListItem__icons'>
                {/* Link to delete warehouse modal */}
                <Link>
                    <img className='inventoryListItem__icon' src={deleteIcon} alt='Delete Icon' />
                </Link>
                <Link to={`/inventory/${inventory.id}/edit`}>
                    <img className='inventoryListItem__icon' src={editIcon} alt='Edit Icon' />
                </Link>
            </div>
        </div>
    );
}

export default InventoryListItem;