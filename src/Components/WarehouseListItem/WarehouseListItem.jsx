import './WarehouseListItem.scss';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import rightChevron from '../../assets/icons/chevron_right-24px.svg';
import { Link } from 'react-router-dom';

function WarehouseListItem({ warehouse, isLastWarehouse }) {
    
    return (
        // Remove border of last warehouse in table
        <div className={`warehouseListItem ${isLastWarehouse ? "warehouseListItem--noBorder" : ""}`}>
            <div className='warehouseListItem__container warehouseListItem__container--first'>
                <div className='warehouseListItem__info warehouseListItem__info--first'>
                    <h4 className='warehouseListItem__title'>Warehouse</h4>
                    <div className='warehouseListItem__nameWrapper'>
                        <Link className='warehouseListItem__link' to={`/${warehouse.id}`}>
                            <h3 className='warehouseListItem__name'>{warehouse.warehouse_name}</h3>
                            <img src={rightChevron} alt="Right Chevron Icon" />
                        </Link>
                    </div>
                </div>
                <div className='warehouseListItem__info warehouseListItem__info--second'>
                    <h4 className='warehouseListItem__title'>Address</h4>
                    <p className='warehouseListItem__detail'>{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</p>
                </div>
            </div>
            <div className='warehouseListItem__container warehouseListItem__container--second'>
                <div className='warehouseListItem__info  warehouseListItem__info--third'>
                    <h4 className='warehouseListItem__title'>Contact Name</h4>
                    <p className='warehouseListItem__detail'>{warehouse.contact_name}</p>
                </div>
                <div className='warehouseListItem__info warehouseListItem__info--fourth'>
                    <h4 className='warehouseListItem__title'>Contact Information</h4>
                    <p className='warehouseListItem__detail'>{warehouse.contact_phone}</p>
                    <p className='warehouseListItem__detail'>{warehouse.contact_email}</p>
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
    );
}

export default WarehouseListItem;