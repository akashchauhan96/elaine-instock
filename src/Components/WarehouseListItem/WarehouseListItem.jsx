import './WarehouseListItem.scss';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import rightChevron from '../../assets/icons/chevron_right-24px.svg';

function WarehouseListItem() {
    return (
        <div className='warehouseListItem'>
            <div className='warehouseListItem__container warehouseListItem__container--first'>
                <div className='warehouseListItem__info warehouseListItem__info--first'>
                    <h4 className='warehouseListItem__title'>Warehouse</h4>
                    <div className='warehouseListItem__nameWrapper'>
                        <h3 className='warehouseListItem__name'>Manhattan</h3>
                        <img src={rightChevron} alt="Right Chevron Icon" />
                    </div>
                </div>
                <div className='warehouseListItem__info warehouseListItem__info--second'>
                    <h4 className='warehouseListItem__title'>Address</h4>
                    <p className='warehouseListItem__detail'>503 Broadway, New York, USA</p>
                </div>
            </div>
            <div className='warehouseListItem__container warehouseListItem__container--second'>
                <div className='warehouseListItem__info  warehouseListItem__info--third'>
                    <h4 className='warehouseListItem__title'>Contact Name</h4>
                    <p className='warehouseListItem__detail'>Parmin Aujla</p>
                </div>
                <div className='warehouseListItem__info warehouseListItem__info--fourth'>
                    <h4 className='warehouseListItem__title'>Contact Information</h4>
                    <p className='warehouseListItem__detail'>+1 (629) 555-0129</p>
                    <p className='warehouseListItem__detail'>paujla@instock.com</p>
                </div>
            </div>
            <div className='warehouseListItem__icons'>
                <img className='warehouseListItem__icon' src={deleteIcon} alt='Delete Icon' />
                <img className='warehouseListItem__icon' src={editIcon} alt='Edit Icon' />
            </div>


        </div>
    );
}

export default WarehouseListItem;