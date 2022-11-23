import './WarehouseListItem.scss';
import rightChevron from '../../assets/icons/chevron_right-24px.svg';

function WarehouseListItem() {
    return (
        <div className='warehouseListItem'>
            <div className='warehouseListItem__container'>
                <div className='warehouseListItem__info'>
                    <h3 className='warehouseListItem__title'>Warehouse</h3>
                    <div>
                        <p className='warehouseListItem__detail'></p>
                        <img src={rightChevron} alt="Right Chevron Icon"/>
                    </div>
                </div>
                <div className='warehouseListItem__info'>
                    <h3 className='warehouseListItem__title'>Address</h3>
                    <p className='warehouseListItem__detail'></p>
                </div>
            </div>
            <div className='warehouseListItem__container'>
                <div className='warehouseListItem__info'>
                    <h3 className='warehouseListItem__title'>Contact Name</h3>
                    <p className='warehouseListItem__detail'></p>
                </div>
                <div className='warehouseListItem__info'>
                    <h3 className='warehouseListItem__title'>Contact Information</h3>
                    <p className='warehouseListItem__detail'></p>
                    <p className='warehouseListItem__detail'></p>
                </div>
            </div>
            <img />
            <img />

        </div>
    );
}

export default WarehouseListItem;